package org.example;

import org.example.IRUtilities.Porter;

import java.io.*;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashSet;

public class StopStem
{
	private Porter porter;
	private HashSet<String> stopWords;
	public boolean isStopWord(String str)
	{
		return stopWords.contains(str);	
	}
	public StopStem(String str) throws IOException {
		super();
		porter = new Porter();
		stopWords = new HashSet<String>();
				
		// use BufferedReader to extract the stopwords in stopwords.txt (path passed as parameter str)
		// add them to HashSet<String> stopWords
		// MODIFY THE BELOW CODE AND ADD YOUR CODES HERE
		File file = new File(str);
		BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
		String st;
		while ((st = bufferedReader.readLine()) != null) {
			stopWords.add(st);
		}
		stopWords.add("is");
		stopWords.add("am");
		stopWords.add("are");
		stopWords.add("was");
		stopWords.add("were");
	}
	public String stem(String str)
	{
		if (isStopWord(str.toLowerCase()))
			return "";
		else
			return porter.stripAffixes(str);
	}
}
