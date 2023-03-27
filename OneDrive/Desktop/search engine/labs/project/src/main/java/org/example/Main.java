package org.example;

import jdbm.RecordManager;
import jdbm.RecordManagerFactory;
import jdbm.helper.FastIterator;
import jdbm.htree.HTree;
import org.htmlparser.util.ParserException;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.util.*;

public class Main {
    private final String WORDINDEXSTRING = "wordIndex";
    private final String urlIndexString = "urlIndex";
    private String link;
    private RecordManager recman;
    private String recordmanager;
    private HTree wordId;
    private HTree idWord;
    private HTree urlId;
    private HTree idUrl;
    private HTree invertedIndex;
    private HTree forwardIndex;
    private HTree subLinks;
    private HTree parentLinks;
    private HTree maxWordUrl;

    public HTree getSubLinks() {
        return subLinks;
    }
    public HTree getWordId() {
        return wordId;
    }

    public HTree getIdWord() {
        return idWord;
    }

    public HTree getUrlId() {
        return urlId;
    }

    public HTree getIdUrl() {
        return idUrl;
    }

    public HTree getInvertedIndex() {
        return invertedIndex;
    }

    public HTree getForwardIndex() {
        return forwardIndex;
    }

    public HTree getMaxWordUrl() {
        return maxWordUrl;
    }

    public HTree getPageInfo() {
        return pageInfo;
    }

    private HTree pageInfo;
    private int wordIndex = 0;
    private int urlIndex = 0;
    private List<String> queue;
    private StopStem stopStem;
    private final String stopWordDirectory;


    public Main(String recordmanager, String link, String stopWordDirectory){
        this.link = link;
        this.recordmanager = recordmanager;
        this.stopWordDirectory = stopWordDirectory;
    }

    public HTree loadHTree(String objectname) throws IOException {
        HTree hashTable;
        long recid = recman.getNamedObject(objectname);
        if (recid != 0){
            hashTable = HTree.load(recman, recid);
            if (Objects.equals(objectname, "maxWordUrl")) {
                wordIndex = (int) hashTable.get(WORDINDEXSTRING);
                urlIndex = (int) hashTable.get(urlIndexString);
            }
        }
        else
        {
            System.out.printf("Table %s Created", objectname);
            System.out.println();
            hashTable = HTree.createInstance(recman);
            recman.setNamedObject( objectname, hashTable.getRecid() );
            if (Objects.equals(objectname, "maxWordUrl")) {
                hashTable.put(WORDINDEXSTRING,0);
                hashTable.put(urlIndexString,0);
            }
        }
        return hashTable;
    }
    public void init() throws IOException {
        queue = new ArrayList<>();
        queue.add(link);
        recman = RecordManagerFactory.createRecordManager(recordmanager);
        wordId = loadHTree("word-word_id");
        idWord = loadHTree("word_id-word");
        urlId = loadHTree("url-url_id");
        idUrl = loadHTree("url_id-url");
        invertedIndex = loadHTree("invertedIndex");
        forwardIndex = loadHTree("forwardIndex");
        maxWordUrl = loadHTree("maxWordUrl");
        pageInfo = loadHTree("pageInfo");
        subLinks = loadHTree("subLinks");
        parentLinks = loadHTree("parentLinks");
        stopStem = new StopStem(stopWordDirectory);
    }

    public void clearRecord(String objectname) throws IOException {
        HTree hashTable;
        hashTable = HTree.createInstance(recman);
        recman.setNamedObject( objectname, hashTable.getRecid() );
        if (Objects.equals(objectname, "maxWordUrl")) {
            hashTable.put(WORDINDEXSTRING,0);
            hashTable.put(urlIndexString,0);
        }
    }

    public void clearAll() throws IOException {
        this.clearRecord("word-word_id");
        this.clearRecord("word_id-word");
        this.clearRecord("url-url_id");
        this.clearRecord("url_id-url");
        this.clearRecord("invertedIndex");
        this.clearRecord("forwardIndex");
        this.clearRecord("maxWordUrl");
        this.clearRecord("pageInfo");
        this.clearRecord("subLinks");
        this.clearRecord("parentLinks");
    }

    public void crawl(int num) throws ParserException, IOException, ParseException, java.text.ParseException {
//        todo: check the update time, get the title
        while (!queue.isEmpty() && urlIndex<num){
            String url = queue.get(0);
            queue.remove(0);
//            parse the url to get the modification date and content length
//            check whether the scraping is successful
            Hashtable info = ResponseParser.getResponse(url);
            if (!(boolean)info.get("Success")){
                continue;
            }

            Date lastModified = (Date) info.get("Last-Modified");
            String contentLengthString = String.valueOf(info.get("Content-Length"));
            boolean newUrl = true;

//            check whether to crawl
            if (urlId.get(url) != null){
                int id = (int) urlId.get(url);
                if (pageInfo.get(id) != null){
                    newUrl = false;
                    Date storedDate = (Date) ((Hashtable) pageInfo.get(id)).get("Last-Modified");
//                    Date storedDate = formatter.parse(storedDateString);
                    if (storedDate.compareTo(lastModified) == 0){
                        continue;
                    }
                }
            }

//            check whether the url is already stored
            if (newUrl){
                urlId.put(url,urlIndex);
                idUrl.put(urlIndex,url);
            }
            Crawler crawler = new Crawler(url, stopWordDirectory);
            // implement stemming in StringExtractor
            Vector<String> words = crawler.extractWords();
            Vector<String> links = crawler.extractLinks();
            // check the value of content-length
            if (Integer.parseInt(contentLengthString) == 0){
                int size = 0;
                for (String word: words){
                    size += word.length();
                }
                info.put("Content-Length",size);
            }
            pageInfo.put(urlIndex,info);
            updateHashTable(words, true, urlIndex);
            updateHashTable(links, false, urlIndex);

            for (String subUrl: links){
                if (urlId.get(subUrl) == null) {
                    queue.add(subUrl);
                }
            }

            if (newUrl){
                urlIndex++;
            }
        }
    }
    public void updateHashTable(Vector<String> words, boolean isWord, int index) throws IOException {
        Hashtable<Integer, Integer> countWords = new Hashtable<Integer, Integer>();

        for(int i = 0; i < words.size(); i++){
            String word = words.get(i);
            if (isWord){
                if (wordId.get(word) == null){
                    wordIndex++;
                    wordId.put(word,wordIndex);
                    idWord.put(wordIndex,word);
                }
                int id = (int) wordId.get(word);
                countWords.putIfAbsent(id, 0);
                countWords.put(id, countWords.get(id) +1);
            }
        }
        if (isWord){
            if (forwardIndex.get(index) == null){
                forwardIndex.put(index, countWords);
            }
        }
        else {
            subLinks.put(index, words);
            for (String link: words){
                if (parentLinks.get(link) == null){
                    parentLinks.put(link, new ArrayList<>());
                }
                if (!((ArrayList) parentLinks.get(link)).contains(index)){
                    ((ArrayList) parentLinks.get(link)).add(index);
                }
            }
        }
    }

//    todo: calculate tf-idf for terms
    public void calculateWeight(){

    }

//    todo: update invertedIndex using the weight
    public void updateInvertedIndex(){

    }

    public Hashtable parseForwardIndex() throws IOException {
        Hashtable count = new Hashtable();
        Object s;
        FastIterator iter = forwardIndex.keys();
        while ((s = iter.next()) != null){
            Hashtable wordWithNums = (Hashtable) forwardIndex.get(s);
            count.put(s, wordWithNums);
        }
        return count;
    }

    public Hashtable parsePageInfo() throws IOException {
        Hashtable pInfo = new Hashtable();
        Object s;
        FastIterator iter = pageInfo.keys();
        while ((s = iter.next()) != null){
            Hashtable wordWithNums = (Hashtable) pageInfo.get(s);
            pInfo.put(s, wordWithNums);
        }
        return pInfo;
    }

    public void printTree(HTree tree) throws IOException {
        FastIterator iter = tree.keys();
        String key;
        while ((key = (String)iter.next())!=null){
            String s = "key: " + key;
            int id = (int) tree.get(key);
            s += " value: " + id;
            System.out.println(s);
        }
    }

    public void finish() throws IOException
    {
        maxWordUrl.put(WORDINDEXSTRING, wordIndex);
        maxWordUrl.put(urlIndexString, urlIndex);
//        printTree(idWord);
        recman.commit();
        recman.close();
    }
    public static void main(String[] args) throws IOException, ParserException, ParseException, java.text.ParseException {
        String link = "http://www.cse.ust.hk";
        String stopWordDirectory = "C:\\Users\\29836\\OneDrive\\Desktop\\search engine\\labs\\project\\src\\main\\java\\org\\example\\stopwords.txt";
        Main m = new Main("project", link, stopWordDirectory);
        m.init();
        m.crawl(1);
        m.clearAll();
        m.finish();
    }
}