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
// const planningContractPoll = [
//     {
//         id: 1,
//         startingDate : "",
//     arrivalDate : "2023-10-04",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 1",
//     revenue : "10000",
//     penalty : "1000",
//     priority : "High",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[0]
//     },
//     {
//         id: 2,
//         startingDate : "",
//     arrivalDate : "2023-10-01",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 2",
//     revenue : "20000",
//     penalty : "10000",
//     priority : "High",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[1]
//     },
//     {
//         id: 3,
//         startingDate : "",
//     arrivalDate : "2023-10-04",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 3",
//     revenue : "40000",
//     penalty : "20000",
//     priority : "Low",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[2]
//     },
//     {
//         id: 4,
//         startingDate : "",
//     arrivalDate : "2023-10-04",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 4",
//     revenue : "150000",
//     penalty : "5000",
//     priority : "Medium",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[3]
//     },
//     {
//         id: 5,
//         startingDate : "",
//     arrivalDate : "2023-10-01",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 5",
//     revenue : "150000",
//     penalty : "5000",
//     priority : "Medium",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[4]
//     },
//     {
//         id: 6,
//         startingDate : "",
//     arrivalDate : "2023-10-03",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 6",
//     revenue : "150000",
//     penalty : "5000",
//     priority : "Medium",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[5]
//     },
//     {
//         id: 7,
//         startingDate : "",
//     arrivalDate : "2023-10-03",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 7",
//     revenue : "150000",
//     penalty : "5000",
//     priority : "Medium",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[6]
//     },
//     {
//         id: 8,
//         startingDate : "",
//     arrivalDate : "2023-10-04",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 8",
//     revenue : "150000",
//     penalty : "5000",
//     priority : "Medium",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[7]
//     },
//     {
//         id: 9,
//         startingDate : "",
//     arrivalDate : "2023-10-01",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 9",
//     revenue : "150000",
//     penalty : "5000",
//     priority : "Medium",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[8]
//     },
//     {
//         id: 10,
//         startingDate : "",
//     arrivalDate : "2023-10-04",
//     deadline : "",
//     estimateArrivalDate : "",
//     name : "Contract 10",
//     revenue : "150000",
//     penalty : "5000",
//     priority : "Medium",
//     terminal : "Terminal1",
//     berth : "Berth1",
//     color : colors[9]
//     },

// ];

const planningContractPoll = []
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

}    ]


let dateScheduledContractPoll = [];
let datePlanningContractPoll = []
let combinationAnalysis = []
let dateBufferContracts = {}
let dateId = {}

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
let dateSelector = document.getElementById("date-selector");
let terminalSelector = document.getElementById("terminal-selector");
let berthSelector = document.getElementById("berth-selector");
let draggableArea = document.getElementById("modules")


$(document).ready(async function () {
    $('#remaining-contract').DataTable({
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
                // Convert object to string representation for display
                return type === 'display' ? JSON.stringify(data) : data;
              }},
             { data: 'handle_time_without_shipper_delay', title: 'Handle Time Without Shipper Delay'},
             { data: 'handle_time_with_shipper_delay', title: 'Handle Time With Shipper Delay'},
             // { data: 'deadline', title: 'Dealine'},
        ],
        columnDefs: [
            { className: 'fw-semibold mb-0 text-center', targets: '_all' }  // Applies class to all columns
        ]
    });
    $('#scheduled-contract').DataTable({
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
                // Convert object to string representation for display
                return type === 'display' ? JSON.stringify(data) : data;
              }},
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

    if (dateSelector) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        dateSelector.value = today;
        dateSelector.min = today;

        arrivalDateSelector.value = today
        arrivalDateSelector.min = today
        dateId[today] = 0
        dateBufferContracts[today] = {
            "1": [],
            "2": [],
            "3": [],
            "4": []
        }
        await refresh()
    }
} );


function checkDisplay(contract){
    if (contract.contract_arrival_date === dateSelector.value && contract.berth === berthSelector.value){
        return true;
    }
    return false;

}


async function refresh() {

    // update tables according to date
    datePlanningContractPoll = []
    dateScheduledContractPoll = []
    planningContractPoll.forEach(contract => {
        if (checkDisplay(contract)){
            datePlanningContractPoll.push(contract)
        }
    })
    scheduledContractPollPoll.forEach(contract => {
        if (checkDisplay(contract)){
            dateScheduledContractPoll.push(contract)
        }
    })
     
    initTable("#remaining-contract", datePlanningContractPoll)
    initTable("#scheduled-contract", dateScheduledContractPoll)

    let temp = []
    planningContractPoll.forEach(contract => {
        if (checkDisplay(contract)){
            temp.push(contract)
        }
    })

    // calculate p,v,r for each combination and display in the table
    combinationAnalysis = await getCombinationResult(temp)
    // display the result in the table
    initTable("#all-contract-combinations", combinationAnalysis)
}


async function getCombinationResult(contracts){
    return [
        {
            id: 1,
            contains: [{
                id: 9,
                startingDate : "",
            arrivalDate : "",
            deadline : "",
            // ask backend for estimated time
            estimateArrivalDate : "",
            name : "Contract 9",
            contract_value : "150000",
            delay_penalty_fee : "5000",
            risk: "0.3"
            },
            {
                id: 10,
                startingDate : "",
            arrivalDate : "",
            deadline : "",
            // ask backend for estimated time
            estimateArrivalDate : "",
            name : "Contract 10",
            contract_value : "150000",
            delay_penalty_fee : "5000",
            risk: "0.9"
            },
            {
                id: 14,
                startingDate : "",
            arrivalDate : "",
            deadline : "",
            // ask backend for estimated time
            estimateArrivalDate : "",
            name : "Contract 14",
            contract_value : "110000",
            delay_penalty_fee : "11000",
            risk: "0.3"
            },
            {
                id: 20,
                startingDate : "",
            arrivalDate : "",
            deadline : "",
            // ask backend for estimated time
            estimateArrivalDate : "",
            name : "Contract 20",
            contract_value : "80000",
            delay_penalty_fee : "1000",
            risk: "0.1"
            }],
            risk: 0.8,
            contract_value: 10000,
            delay_penalty_fee: 10000
        },
        {
            id: 3,
            contains: [{
                id: 9,
                startingDate : "",
                arrivalDate : "",
                deadline : "",
                estimateArrivalDate : "",
                name : "Contract 3",
                contract_value : "150000",
                delay_penalty_fee : "5000",
                risk: "0.8"
            },
            {
                id: 10,
                startingDate : "",
                arrivalDate : "",
                deadline : "",
                estimateArrivalDate : "",
                name : "Contract 8",
                contract_value : "150000",
                delay_penalty_fee : "5000",
                risk: "0.6"
            }],
            risk: 0.9,
            contract_value: 100000,
            delay_penalty_fee: 1000
        },
        {
            id: 2,
            contains: [{
                id: 9,
                startingDate : "",
            arrivalDate : "",
            deadline : "",
            // ask backend for estimated time
            estimateArrivalDate : "",
            name : "Contract 3",
            contract_value : "150000",
            delay_penalty_fee : "5000",
            risk: "1.0"
            },
            {
                id: 10,
                startingDate : "",
            arrivalDate : "",
            deadline : "",
            // ask backend for estimated time
            estimateArrivalDate : "",
            name : "Contract 8",
            contract_value : "150000",
            delay_penalty_fee : "5000",
            risk: "0.4"
            }],
            risk: 0.6,
            contract_value: 8000,
            delay_penalty_fee: 12000
        },
    ]
}


// prevent selecting past
function setMinArrivalDate(){
    const startingDate = startingDateSelector.value;
    // console.log(startingDate)
    arrivalDateSelector.min = startingDate;
    deadlineSelector.min = startingDate;
}


async function selectDate(event){
    event.preventDefault()
    arrivalDateSelector.value = dateSelector.value
    if (dateId[dateSelector.value] === undefined){
        dateId[dateSelector.value] = 1;
    }
    if (dateBufferContracts[dateSelector.value] === undefined){
        dateBufferContracts[dateSelector.value] = {
            "1": [],
            "2": [],
            "3": [],
            "4": []
        }
    }
    await refresh()
}


function handleAddContract(event){
    event.preventDefault()
    let contract = {
        id: index
    }
    contract.contract_start_date = startingDateSelector.value
    contract.contract_arrival_date = arrivalDateSelector.value
    contract.arrival_dates_probabilities = [{[arrivalDateSelector.value]: "100%"}]
    contract.shipper_name = contractNameSelector.value
    contract.contract_value = contractRevenueSelector.value
    contract.delay_penalty_fee = contractPenaltySelector.value
    contract.goods_priority = contractPrioritySelector.value
    contract.terminal = terminalSelector.value
    contract.berth = berthSelector.value
    contract.handle_time_without_shipper_delay = handleTimeSelector.value
    contract.handle_time_with_shipper_delay = handleTimeDelaySelector.value
    contract.color = colors[dateId[arrivalDateSelector.value]%10]
    planningContractPoll.push(contract)


    // // Create new elements in modules
    // const newP = document.createElement('p');
    // newP.className = 'drag ui-draggable ui-draggable-handle';
    // const newA = document.createElement('a');
    // newA.className = 'btn btn-default';
    // newA.textContent = contractNameSelector.value;
    // // Append the new elements
    // newP.appendChild(newA);
    // newP.style.backgroundColor = colors[dateId[arrivalDateSelector.value]%10]
    // draggableArea.appendChild(newP);
    // $(newP).draggable({
    //     helper: "clone",
    //     revert: "invalid"
    //   })
    
    var selectedDate = document.getElementById('date-selector').value;

    if (selectedDate === contract.contract_arrival_date){
        insertToTable("#remaining-contract", [contract])
        refresh()
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
