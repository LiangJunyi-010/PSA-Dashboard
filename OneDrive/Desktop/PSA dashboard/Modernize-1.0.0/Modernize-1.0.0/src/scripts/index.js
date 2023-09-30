const contractPoll = [];
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


const colors = [
    '#FF5733', // Pomegranate
    '#33FF57', // Emerald
    '#8D33FF', // Wisteria
    '#FF33F6', // Magenta
    '#33DBFF', // Peter River
    '#FF8333', // Carrot
    '#FFFD33', // Sunflower
    '#5EFF33', // Algae Green
    '#3352FF', // Blue Jeans
    '#FF335E'  // Alizarin
];



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
            "2": [],
            "3": [],
            "4": [],
            "5": []
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
    contractPoll.push(contract)

    dateId[arrivalDateSelector.value] += 1

    // Create new elements in modules
    const newP = document.createElement('p');
    newP.className = 'drag ui-draggable ui-draggable-handle';
    const newA = document.createElement('a');
    newA.className = 'btn btn-default';
    newA.textContent = "name";
    // Append the new elements
    newP.appendChild(newA);
    // newP.style.backgroundColor = colors[dateId[arrivalDateSelector.value]%10]
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

