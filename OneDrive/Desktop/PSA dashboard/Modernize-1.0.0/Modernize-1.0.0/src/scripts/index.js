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


const contractPoll = [
    {
        id: 1,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 1",
    revenue : "10000",
    penalty : "1000",
    priority : "High",
    terminal : "",
    berth : "",
    color : colors[0]
    },
    {
        id: 2,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 2",
    revenue : "20000",
    penalty : "10000",
    priority : "High",
    terminal : "",
    berth : "",
    color : colors[1]
    },
    {
        id: 3,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 3",
    revenue : "40000",
    penalty : "20000",
    priority : "Low",
    terminal : "",
    berth : "",
    color : colors[2]
    },
    {
        id: 4,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 4",
    revenue : "150000",
    penalty : "5000",
    priority : "Medium",
    terminal : "",
    berth : "",
    color : colors[3]
    },
    {
        id: 5,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 5",
    revenue : "150000",
    penalty : "5000",
    priority : "Medium",
    terminal : "",
    berth : "",
    color : colors[4]
    },
    {
        id: 6,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 6",
    revenue : "150000",
    penalty : "5000",
    priority : "Medium",
    terminal : "",
    berth : "",
    color : colors[5]
    },
    {
        id: 7,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 7",
    revenue : "150000",
    penalty : "5000",
    priority : "Medium",
    terminal : "",
    berth : "",
    color : colors[6]
    },
    {
        id: 8,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 8",
    revenue : "150000",
    penalty : "5000",
    priority : "Medium",
    terminal : "",
    berth : "",
    color : colors[7]
    },
    {
        id: 9,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 9",
    revenue : "150000",
    penalty : "5000",
    priority : "Medium",
    terminal : "",
    berth : "",
    color : colors[8]
    },
    {
        id: 10,
        startingDate : "",
    arrivalDate : "",
    deadline : "",
    // ask backend for estimated time
    estimateArrivalDate : "",
    name : "Contract 10",
    revenue : "150000",
    penalty : "5000",
    priority : "Medium",
    terminal : "",
    berth : "",
    color : colors[9]
    },

];
const scheduledContractPoll = [];
const combinationAnalysis = []
const dateBufferContracts = {}
const dateId = {}

let index = 1;

let startingDateSelector = document.getElementById("start-date-selector");
let arrivalDateSelector = document.getElementById("arrival-date-selector");
let deadlineSelector = document.getElementById("deadline-selector");
let contractNameSelector = document.getElementById("contract-name-selector");
let contractRevenueSelector = document.getElementById("contract-revenue-selector");
let contractPenaltySelector = document.getElementById("contract-penalty-selector");
let contractPrioritySelector = document.getElementById("contract-priority-selector");


let dateSelector = document.getElementById("date-selector");
let terminalSelector = document.getElementById("terminal-selector");
let berthSelector = document.getElementById("berth-selector");
let draggableArea = document.getElementById("modules")

$(document).ready( function () {
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
        
    }

    $('#remaining-contract').DataTable({
        data: contractPoll,
        columns: [
            { data: 'id', title: 'ID' },
            { data: 'name', title: 'Contract Name'},
            { data: 'revenue', title: 'Value'},
            { data: 'penalty', title: 'Penalty'},
            { data: 'priority', title: 'Priority'},
            { data: 'startingDate', title: 'Scheduled Starting Date'},
            { data: 'arrivalDate', title: 'Scheduled Arrival Date'},
            { data: 'estimateArrivalDate', title: 'Estimated Arrival Date'},
            { data: 'deadline', title: 'Dealine'},
        ],
        columnDefs: [
            { className: 'fw-semibold mb-0 text-center', targets: '_all' }  // Applies class to all columns
        ]
    });
    $('#scheduled-contract').DataTable({
        data: contractPoll,
        columns: [
            { data: 'id', title: 'ID' },
            { data: 'name', title: 'Contract Name'},
            { data: 'revenue', title: 'Value'},
            { data: 'penalty', title: 'Penalty'},
            { data: 'priority', title: 'Priority'},
            { data: 'startingDate', title: 'Scheduled Starting Date'},
            { data: 'arrivalDate', title: 'Scheduled Arrival Date'},
            { data: 'estimateArrivalDate', title: 'Estimated Arrival Date'},
            { data: 'deadline', title: 'Dealine'},
        ],
        columnDefs: [
            { className: 'fw-semibold mb-0 text-center', targets: '_all' }  // Applies class to all columns
        ]
    });
    $('#all-contract-combinations').DataTable({
        data :[
            { buffer: '1', revenue: 'Value1', penalty: 'Penalty1', risk: 'Risk1', categories: ['Cat1', 'Cat2', 'Cat3'], values: [100, 200, 300] },
            { buffer: '2', revenue: 'Value1', penalty: 'Penalty1', risk: 'Risk1', categories: ['Cat1', 'Cat2', 'Cat3'], values: [100, 200, 300] },
            { buffer: '3', revenue: 'Value1', penalty: 'Penalty1', risk: 'Risk1', categories: ['Cat1', 'Cat2', 'Cat3'], values: [100, 200, 300] },
        ],
        columns: [
            { data: 'buffer', title: 'Buffer' },
            { data: 'revenue', title: 'Value'},
            { data: 'penalty', title: 'Penalty'},
            { data: 'risk', title: 'Risk'},
        ],
        columnDefs: [
            { className: 'fw-semibold mb-0 text-center', targets: '_all' }  // Applies class to all columns
        ]
    });
} );





// prevent selecting past
function setMinArrivalDate(){
    const startingDate = startingDateSelector.value;
    // console.log(startingDate)
    arrivalDateSelector.min = startingDate;
    deadlineSelector.min = startingDate;
}


function selectDate(event){
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
     
    clearTable("#remaining-contract")
    clearTable("#scheduled-contract")
    initTable("#remaining-contract", contractPoll)
    initTable("#scheduled-contract", scheduledContractPoll)
}

// call backend for calculation of combinations
function calculateCombinations(contracts){
    
}

function handleAddContract(event){
    event.preventDefault()

    let contract = {
        id: index
    }
    contract.startingDate = startingDateSelector.value
    contract.arrivalDate = arrivalDateSelector.value
    contract.deadline = deadlineSelector.value
    // ask backend for estimated time
    contract.estimateArrivalDate = contract.deadline
    contract.name = contractNameSelector.value
    contract.revenue = contractRevenueSelector.value
    contract.penalty = contractPenaltySelector.value
    contract.priority = contractPrioritySelector.value
    contract.terminal = terminalSelector.value
    contract.berth = berthSelector.value
    contract.color = colors[dateId[arrivalDateSelector.value]%10]
    contractPoll.push(contract)


    // Create new elements in modules
    const newP = document.createElement('p');
    newP.className = 'drag ui-draggable ui-draggable-handle';
    const newA = document.createElement('a');
    newA.className = 'btn btn-default';
    newA.textContent = contractNameSelector.value;
    // Append the new elements
    newP.appendChild(newA);
    newP.style.backgroundColor = colors[dateId[arrivalDateSelector.value]%10]
    draggableArea.appendChild(newP);
    $(newP).draggable({
        helper: "clone",
        revert: "invalid"
      })
    
    var selectedDate = document.getElementById('date-selector').value;
    console.log(selectedDate, contract.arrivalDate)
    console.log(selectedDate===contract.arrivalDate)
    if (selectedDate === contract.arrivalDate){
        insertToTable("#remaining-contract", [contract])
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
    const table = $(tableId).DataTable();
    let rows = []
    let date = dateSelector.value;
    let terminal = terminalSelector.value;
    let berth = berthSelector.value;
    datasource.forEach(contract => {
        if (contract.arrivalDate === date && contract.terminal === terminal && contract.berth === berth){
            rows.push(contract)
        }
    })
    if (rows !== undefined){
        table.rows.add(rows).draw();
    }
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
    for (let c of contractPoll){
        if (c.name === ui.draggable.text()){
            contract = c;
        }
    }
    let slots = document.querySelectorAll(`#dropzone${groupId} .slot`);
    // console.log(slots)
    // console.log(dateBufferContracts[dateSelector.value]["2"])
    // console.log(dateBufferContracts[dateSelector.value]["2"].length)
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
