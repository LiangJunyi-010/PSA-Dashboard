const baseUrl = "https://54.151.150.206"
const devBaseUrl = "http://localhost:5000"
const dev = false
const estimateDateUrl =  "/estimated_arrival_time"
const riskUrl = "/risks"

const colors = [
    "#ABCDEF", // Pale Blue
    "#FEDCBA", // Light Beige
    "#CBAF87", // Light Khaki
    "#FFEEDD", // Very Light Orange-Pink
    "#DDFFEE", // Very Light Green
    "#EEDDFF", // Very Light Purple
    "#DDBB99", // Light Taupe
    "#FFFAE1", // Pale Canary
    "#E1F7D5", // Very Pale Green
    "#FFEFDB"  // Very Pale Orange
];

const planningContractPoll = [
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 32",
        "contract_value": 400000,
        "handle_time_without_shipper_delay": 2,
        "handle_time_with_shipper_delay": 1,
        "delay_penalty_fee": 560000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 51,
            "2023-10-21": 34,
            "2023-10-22": 7,
            "2023-10-23": 4,
            "2023-10-24": 4
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 40",
        "contract_value": 400000,
        "handle_time_without_shipper_delay": 2,
        "handle_time_with_shipper_delay": 1,
        "delay_penalty_fee": 560000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 51,
            "2023-10-21": 34,
            "2023-10-22": 7,
            "2023-10-23": 4,
            "2023-10-24": 4
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 41",
        "contract_value": 400000,
        "handle_time_without_shipper_delay": 2,
        "handle_time_with_shipper_delay": 1,
        "delay_penalty_fee": 560000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 51,
            "2023-10-21": 34,
            "2023-10-22": 7,
            "2023-10-23": 4,
            "2023-10-24": 4
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 42",
        "contract_value": 400000,
        "handle_time_without_shipper_delay": 2,
        "handle_time_with_shipper_delay": 1,
        "delay_penalty_fee": 560000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 51,
            "2023-10-21": 34,
            "2023-10-22": 7,
            "2023-10-23": 4,
            "2023-10-24": 4
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 43",
        "contract_value": 400000,
        "handle_time_without_shipper_delay": 2,
        "handle_time_with_shipper_delay": 1,
        "delay_penalty_fee": 560000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 51,
            "2023-10-21": 34,
            "2023-10-22": 7,
            "2023-10-23": 4,
            "2023-10-24": 4
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 33",
        "contract_value": 400000,
        "handle_time_without_shipper_delay": 2,
        "handle_time_with_shipper_delay": 3,
        "delay_penalty_fee": 480000.0,
        "goods_priority": 3,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 91,
            "2023-10-21": 5,
            "2023-10-22": 2,
            "2023-10-23": 1,
            "2023-10-24": 1,
            "2023-10-25": 0
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 34",
        "contract_value": 320000,
        "handle_time_without_shipper_delay": 3,
        "handle_time_with_shipper_delay": 3,
        "delay_penalty_fee": 384000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 100
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 35",
        "contract_value": 150000,
        "handle_time_without_shipper_delay": 3,
        "handle_time_with_shipper_delay": 4,
        "delay_penalty_fee": 150000.0,
        "goods_priority": 3,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 99,
            "2023-10-21": 1,
            "2023-10-22": 0
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 36",
        "contract_value": 100000,
        "handle_time_without_shipper_delay": 1,
        "handle_time_with_shipper_delay": 3,
        "delay_penalty_fee": 100000.0,
        "goods_priority": 2,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 81,
            "2023-10-21": 10,
            "2023-10-22": 6,
            "2023-10-23": 2,
            "2023-10-24": 1,
            "2023-10-25": 0
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 37",
        "contract_value": 540000,
        "handle_time_without_shipper_delay": 2,
        "handle_time_with_shipper_delay": 4,
        "delay_penalty_fee": 594000.0,
        "goods_priority": 3,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 91,
            "2023-10-21": 9
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 38",
        "contract_value": 420000,
        "handle_time_without_shipper_delay": 2,
        "handle_time_with_shipper_delay": 6,
        "delay_penalty_fee": 462000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 49,
            "2023-10-21": 21,
            "2023-10-22": 18,
            "2023-10-23": 12
        }
    },
    {
        "contract_arrival_date": "2023-10-19",
        "shipper_name": "Shipper 39",
        "contract_value": 570000,
        "handle_time_without_shipper_delay": 1,
        "handle_time_with_shipper_delay": 4,
        "delay_penalty_fee": 627000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-20": 70,
            "2023-10-21": 16,
            "2023-10-22": 14
        }
    }
]
const scheduledContractPollPoll = [
    {  "contract_arrival_date": "2023-10-15",
        "shipper_name": "Shipper 3",
        "contract_value": 393000,
        "handle_time_without_shipper_delay": 3,
        "handle_time_with_shipper_delay": 5,
        "delay_penalty_fee": 510900.0,
        "goods_priority": 2,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-15": 59,
            "2023-10-16": 13,
            "2023-10-17": 28
        }
    },
    {  "contract_arrival_date": "2023-10-15",
        "shipper_name": "Shipper 4",
        "contract_value": 338000,
        "handle_time_without_shipper_delay": 1,
        "handle_time_with_shipper_delay": 7,
        "delay_penalty_fee": 405600.0,
        "goods_priority": 4,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-15": 26,
            "2023-10-16": 19,
            "2023-10-17": 51,
            "2023-10-18": 1,
            "2023-10-19": 2,
            "2023-10-20": 0,
            "2023-10-21": 1
        }
    },
    {  "contract_arrival_date": "2023-10-15",
        "shipper_name": "Shipper 5",
        "contract_value": 498000,
        "handle_time_without_shipper_delay": 3,
        "handle_time_with_shipper_delay": 6,
        "delay_penalty_fee": 498000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-15": 78,
            "2023-10-16": 15,
            "2023-10-17": 0,
            "2023-10-18": 6,
            "2023-10-19": 1
        }
    },
   
    {  "contract_arrival_date": "2023-10-16",
        "shipper_name": "Shipper 8",
        "contract_value": 557000,
        "handle_time_without_shipper_delay": 3,
        "handle_time_with_shipper_delay": 5,
        "delay_penalty_fee": 612700.0,
        "goods_priority": 4,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-16": 3,
            "2023-10-17": 46,
            "2023-10-18": 47,
            "2023-10-19": 4
        }
    },
    {  "contract_arrival_date": "2023-10-16",
        "shipper_name": "Shipper 9",
        "contract_value": 591000,
        "handle_time_without_shipper_delay": 1,
        "handle_time_with_shipper_delay": 10,
        "delay_penalty_fee": 768300.0,
        "goods_priority": 2,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-16": 66,
            "2023-10-17": 0,
            "2023-10-18": 16,
            "2023-10-19": 13,
            "2023-10-20": 1,
            "2023-10-21": 3,
            "2023-10-22": 1
        }
    },
   
    { "contract_arrival_date": "2023-10-17",
        "shipper_name": "Shipper 19",
        "contract_value": 445000,
        "handle_time_without_shipper_delay": 6,
        "handle_time_with_shipper_delay": 7,
        "delay_penalty_fee": 445000.0,
        "goods_priority": 4,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-17": 50,
            "2023-10-18": 26,
            "2023-10-19": 6,
            "2023-10-20": 17,
            "2023-10-21": 0,
            "2023-10-22": 0,
            "2023-10-23": 0,
            "2023-10-24": 1
        }
    },
    { "contract_arrival_date": "2023-10-17",
        "shipper_name": "Shipper 20",
        "contract_value": 532000,
        "handle_time_without_shipper_delay": 1,
        "handle_time_with_shipper_delay": 2,
        "delay_penalty_fee": 532000.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-17": 34,
            "2023-10-18": 31,
            "2023-10-19": 30,
            "2023-10-20": 4,
            "2023-10-21": 1
        }
    },
    { "contract_arrival_date": "2023-10-17",
        "shipper_name": "Shipper 21",
        "contract_value": 374000,
        "handle_time_without_shipper_delay": 5,
        "handle_time_with_shipper_delay": 7,
        "delay_penalty_fee": 374000.0,
        "goods_priority": 4,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-17": 42,
            "2023-10-18": 58
        }
    },
    { "contract_arrival_date": "2023-10-17",
        "shipper_name": "Shipper 22",
        "contract_value": 423000,
        "handle_time_without_shipper_delay": 1,
        "handle_time_with_shipper_delay": 11,
        "delay_penalty_fee": 549900.0,
        "goods_priority": 1,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-17": 25,
            "2023-10-18": 70,
            "2023-10-19": 3,
            "2023-10-20": 1,
            "2023-10-21": 0,
            "2023-10-22": 1
        }
    },
    { "contract_arrival_date": "2023-10-17",
        "shipper_name": "Shipper 23",
        "contract_value": 315000,
        "handle_time_without_shipper_delay": 4,
        "handle_time_with_shipper_delay": 12,
        "delay_penalty_fee": 409500.0,
        "goods_priority": 2,
        "terminal": "Terminal1",
        "berth": "Berth1",
        "arrival_dates_probabilities": {
            "2023-10-17": 9,
            "2023-10-18": 54,
            "2023-10-19": 7,
            "2023-10-20": 13,
            "2023-10-21": 17
        }

}]


let dateScheduledContractPoll = [];
let datePlanningContractPoll = []
let dateBufferContracts = {}
let dateId = {}
let rankChoices = []

let index = 1;

let startingDateSelector = document.getElementById("start-date-selector");
let arrivalDateSelector = document.getElementById("arrival-date-selector");
let deadlineSelector = document.getElementById("deadline-selector");
let contractNameSelector = document.getElementById("contract-name-selector");
let contractRevenueSelector = document.getElementById("contract-revenue-selector");
let contractPenaltySelector = document.getElementById("contract-penalty-selector");
let handleTimeSelector = document.getElementById("contract-handle-time-selector");
let handleTimeDelaySelector = document.getElementById("contract-handle-time-selector");
let contractPrioritySelector = document.getElementById("contract-handle-time-delay-selector");
let scheduledDateSelector = document.getElementById("scheduled-date-selector");
let availableDateSelector = document.getElementById("available-date-selector");
let scheduledTerminalSelector = document.getElementById("scheduled-terminal-selector");
let scheduledBerthSelector = document.getElementById("scheduled-berth-selector");
let availableTerminalSelector = document.getElementById("available-terminal-selector");
let availableBerthSelector = document.getElementById("available-berth-selector");
let draggableArea = document.getElementById("modules")
let loader = document.getElementById("spinner")
let combinationTable = document.getElementById("table-wrapper")


$(document).ready(async function () {
    $('#remaining-contract').DataTable({
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50, 100],
        columns: [
             // { data: 'id', title: 'ID' },
             { data: 'shipper_name', title: 'Shipper Name'},
             { data: 'contract_value', title: 'Value'},
             { data: 'delay_penalty_fee', title: 'Penalty'},
             { data: 'goods_priority', title: 'Priority'},
             // { data: 'startingDate', title: 'Scheduled Starting Date'},
             { data: 'contract_arrival_date', title: 'Scheduled Arrival Date'},
             { data: 'arrival_dates_probabilities', title: 'Estimated Arrival Date',
             render: function(data, type, row) {
                if(type === 'display') {
                    // Sort the entries by their values and get the top 3
                    let sortedEntries = Object.entries(data).sort(([, a], [, b]) => b - a).slice(0, 3);

                    let str = '<div style="display: flex; align-items: center;"><table>';
                    for(const [key, value] of sortedEntries) {
                        str += `<tr><td>${key}</td><td>${value}%</td></tr>`;
                    }
                    str += '</table></div>';
                    return str;
                }
                return data;
            }
            },
             { data: 'handle_time_without_shipper_delay', title: 'Handle Time Without Shipper Delay'},
             { data: 'handle_time_with_shipper_delay', title: 'Handle Time With Shipper Delay'},
             // { data: 'deadline', title: 'Dealine'},
        ],
        columnDefs: [
            { className: 'fw-semibold mb-0 text-center', targets: '_all' }  // Applies class to all columns
        ]
    });
    $('#scheduled-contract').DataTable({
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50, 100],
        columns: [
            // { data: 'id', title: 'ID' },
            { data: 'shipper_name', title: 'Shipper Name'},
            { data: 'contract_value', title: 'Value'},
            { data: 'delay_penalty_fee', title: 'Penalty'},
            { data: 'goods_priority', title: 'Priority'},
            // { data: 'startingDate', title: 'Scheduled Starting Date'},
            { data: 'contract_arrival_date', title: 'Scheduled Arrival Date'},
            {data: 'arrival_dates_probabilities',
            title: 'Estimated Arrival Date',
            render: function(data, type, row) {
                if(type === 'display') {
                    // Sort the entries by their values and get the top 3
                    let sortedEntries = Object.entries(data).sort(([, a], [, b]) => b - a).slice(0, 3);

                    let str = '<div style="display: flex; align-items: center;"><table>';
                    for(const [key, value] of sortedEntries) {
                        str += `<tr><td>${key}</td><td>${value}%</td></tr>`;
                    }
                    str += '</table></div>';
                    return str;
                }
                return data;
            }
            },
            { data: 'handle_time_without_shipper_delay', title: 'Handle Time Without Shipper Delay'},
            { data: 'handle_time_with_shipper_delay', title: 'Handle Time With Shipper Delay'},
            // { data: 'deadline', title: 'Dealine'},
        ],
        columnDefs: [
            { className: 'fw-semibold mb-0 text-center', targets: '_all' }  // Applies class to all columns
        ]
    });
    $('#all-contract-combinations').DataTable({
        "bFilter": false,
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50, 100],
        columns: [
            { data: 'id', title: 'Combination',width: "25%" },
            { data: 'contract_value', title: 'Value',"width": "25%"},
            { data: 'delay_penalty_fee', title: 'Penalty',"width": "25%"},
            { data: 'risk', title: 'Risk',"width": "25%"},
        ],
        columnDefs: [
            { className: 'fw-semibold mb-0 text-center', targets: '_all' }  // Applies class to all columns
        ]
    });


        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        let scheduledDate = "2023-10-17";
        scheduledDateSelector.value = scheduledDate;
        scheduledDateSelector.min = today;

        let availableDate = "2023-10-19";
        availableDateSelector.value = availableDate
        availableDateSelector.min = today
        dateId[today] = 0
        dateBufferContracts[today] = {
            "1": [],
            "2": [],
            "3": [],
            "4": []
        }
        await refresh(false, "all")
    
} );


function checkDisplay(contract, type){
    if (type === "available") {
        if (contract.contract_arrival_date === availableDateSelector.value && contract.berth === availableBerthSelector.value && contract.terminal === availableTerminalSelector.value){
            return true;
        }
        return false;
    }
    else {
        if (contract.contract_arrival_date === scheduledDateSelector.value && contract.berth === scheduledBerthSelector.value && contract.terminal === scheduledTerminalSelector.value){
            return true;
        }
        return false;
    }


}


function showAlert() {
    document.getElementById('alert').classList.add('show');
}

function hideAlert() {
    document.getElementById('alert').classList.remove('show');
}

async function changeBufferSize(){
    refresh(true)
}


async function refresh(submit, type) {
    let temp = []
        planningContractPoll.forEach(contract => {
            if (checkDisplay(contract, "available")){
                temp.push(contract)
            }
        })
    if (!submit){
        // update tables according to date
        dateScheduledContractPoll = []
        scheduledContractPollPoll.forEach(contract => {
            if (checkDisplay(contract, "scheduled")){
                dateScheduledContractPoll.push(contract)
            }
        })
        
        if (type === "scheduled" || type === "all"){
            initTable("#scheduled-contract", dateScheduledContractPoll)
        }
        if (type === "available" || type === "all") {
            initTable("#remaining-contract", temp)
        }
    }

    else {
        // calculate p,v,r for each combination and display in the table
        let buffer_size = document.getElementById("buffer-size-selector").value
        let goods_priority_rank = document.getElementById("goods-priority-rank") .value
        let contract_value_rank = document.getElementById("contract-value-rank") .value
        let penalty_rank = document.getElementById("penalty-rank").value
        let deadline_rank = document.getElementById("deadline-rank").value

        let checkNum = 10 - temp.length - buffer_size
        console.log(checkNum)
        if (checkNum>=0){
            showAlert()
            return
        }

        criteria = {"goods_priority": goods_priority_rank, "delay_penalty_fee": penalty_rank, "contract_value": contract_value_rank, "deadline": deadline_rank}

        loader.style.display = "block"
        $('#table-wrapper').hide();
        let combinationAnalysis = await getCombinationResult(temp, buffer_size, criteria)
        loader.style.display = "none"
        $('#table-wrapper').show();
        initTable("#all-contract-combinations", combinationAnalysis)
    }
}


async function getCombinationResult(contracts, buffer_size, criteria){
    let payload = {
        contracts: contracts,
        buffer_size: buffer_size,
        criteria: criteria
    }
    let response = await fetch(riskUrl, {
        method: "POST",
        body: JSON.stringify(payload), // assuming that contract needs to be sent as JSON
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let result = await response.json()
    return result
}


// prevent selecting past
function setMinArrivalDate(){
    const startingDate = startingDateSelector.value;
    // console.log(startingDate)
    availableDateSelector.min = startingDate;
    scheduledDateSelector.min = startingDate;
}


async function selectScheduledDate(event){
    event.preventDefault()
    await refresh(false, "scheduled")
}

async function selectAvailableDate(event){
    event.preventDefault()
    arrivalDateSelector.value = availableDateSelector.value
    await refresh(false, "available")
}

async function getEstimatedDate(contract){
    console.log(estimateDateUrl)
    let response = await fetch(estimateDateUrl, {
        method: "POST",
        body: JSON.stringify(contract), // assuming that contract needs to be sent as JSON
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let dateEstimation = await response.json()
    contract["arrival_dates_probabilities"] =  dateEstimation
    return contract
}

async function handleAddContract(event){
    event.preventDefault()
    let contract = {
        id: index
    }
    contract.contract_start_date = startingDateSelector.value
    contract.contract_arrival_date = availableDateSelector.value
    contract.shipper_name = contractNameSelector.value
    contract.contract_value = contractRevenueSelector.value
    contract.delay_penalty_fee = contractPenaltySelector.value
    contract.goods_priority = contractPrioritySelector.value
    contract.terminal = availableTerminalSelector.value
    contract.berth = availableBerthSelector.value
    contract.handle_time_without_shipper_delay = handleTimeSelector.value
    contract.handle_time_with_shipper_delay = handleTimeDelaySelector.value
    contract.color = colors[dateId[arrivalDateSelector.value]%10]
    contract.arrival_dates_probabilities = {}
    contract = await getEstimatedDate(contract)
    planningContractPoll.push(contract)

    
    var selectedDate = availableDateSelector.value;

    if (selectedDate === contract.contract_arrival_date){
        insertToTable("#remaining-contract", [contract])
        await refresh(false, "available")
    }

    dateId[arrivalDateSelector.value] += 1
    index++;

    $('.modal.in').modal('hide')

}


function insertToTable(tableId, rows){
    const table = $(tableId).DataTable();
    console.log(rows)
    if (rows !== undefined){
        table.rows.add(rows).draw();
    }
}

function initTable(tableId, datasource){
    clearTable(tableId)
    const table = $(tableId).DataTable();
    table.rows.add(datasource).draw();
}

function clearTable(tableId){
    const table = $(tableId).DataTable();
    table.clear().draw();
}

function addToDropArea(ui, groupId){
    if (dateBufferContracts[dateSelector.value] !== undefined){
        if (dateBufferContracts[dateSelector.value][groupId].length === 10-groupId){
            return
        }
        for (let contract of dateBufferContracts[dateSelector.value][groupId]){
            if (contract.name == ui.draggable.text()){
                return
            }
        }
    }

    let contract;
    for (let c of planningContractPoll){
        if (c.name === ui.draggable.text()){
            contract = c;
        }
    }
    let slots = document.querySelectorAll(`#dropzone${groupId} .slot`);
    let slot = slots[dateBufferContracts[dateSelector.value][groupId].length]
    slot.style.backgroundColor = contract.color
    slot.textContent = contract.name
    dateBufferContracts[dateSelector.value][groupId].push(contract)
}

$('.drag').draggable({ 
    appendTo: 'body',
    helper: 'clone'
  });
  
  $('#dropzone1').droppable({
    activeClass: 'active',
    hoverClass: 'hover',
    accept: ":not(.ui-sortable-helper)", // Reject clones generated by sortable
    drop: function (e, ui) {
        addToDropArea(ui, "1")
    }
  }).sortable({
    items: '.drop-item',
    sort: function() {
      // gets added unintentionally by droppable interacting with sortable
      // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
      $( this ).removeClass( "active" );
    }
  });
  $('#dropzone2').droppable({
    activeClass: 'active',
    hoverClass: 'hover',
    accept: ":not(.ui-sortable-helper)", // Reject clones generated by sortable
    drop: function (e, ui) {
        addToDropArea(ui, "2")
    }
  }).sortable({
    items: '.drop-item',
    sort: function() {
      // gets added unintentionally by droppable interacting with sortable
      // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
      $( this ).removeClass( "active" );
    }
  });
  $('#dropzone3').droppable({
    activeClass: 'active',
    hoverClass: 'hover',
    accept: ":not(.ui-sortable-helper)", // Reject clones generated by sortable
    drop: function (e, ui) {
        addToDropArea(ui, "3")
    }
  }).sortable({
    items: '.drop-item',
    sort: function() {
      // gets added unintentionally by droppable interacting with sortable
      // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
      $( this ).removeClass( "active" );
    }
  });
  $('#dropzone4').droppable({
    activeClass: 'active',
    hoverClass: 'hover',
    accept: ":not(.ui-sortable-helper)", // Reject clones generated by sortable
    drop: function (e, ui) {
        addToDropArea(ui, "4")
    }
  }).sortable({
    items: '.drop-item',
    sort: function() {
      // gets added unintentionally by droppable interacting with sortable
      // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
      $( this ).removeClass( "active" );
    }
  });

function removeArrangeFromBuffer(element){
    let idx = element.dataset.name
    let grp = element.dataset.group
    let contracts = dateBufferContracts[dateSelector.value][grp]
    if (idx>contracts.length){
        return
    }
    console.log(dateBufferContracts[dateSelector.value][grp].length)

    dateBufferContracts[dateSelector.value][grp].splice(idx-1,1)
    let slots = document.querySelectorAll(`#dropzone${grp} .slot`);
    let i=0;
    console.log(dateBufferContracts[dateSelector.value][grp].length)
    for (;i<dateBufferContracts[dateSelector.value][grp].length;i++){
        slots[i].style.backgroundColor = dateBufferContracts[dateSelector.value][grp][i].color
        slots[i].textContent = dateBufferContracts[dateSelector.value][grp][i].name
    }
    for (;i<10-grp;i++){
        slots[i].style.backgroundColor = "green"
        slots[i].textContent = ""
    }
   
}
