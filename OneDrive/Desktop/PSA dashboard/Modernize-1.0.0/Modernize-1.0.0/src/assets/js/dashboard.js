$(function () {

  let values = []
  let risks = []
  let penalties = []
  let contractNames = []

  var chartOptions = {

    series: [{ name: "Value", data: [] }],

    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },
    colors: ["#5D87FF", "#49BEFF"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: ["shipper1", "shipper2", "shipper3", "shipper4", "shipper5", "shipper6", "shipper7","shipper8"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      tickAmount: 4,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },


    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]
  };

  var apexChart = new ApexCharts(document.querySelector("#chart"), chartOptions);
  apexChart.render();

  $("input[name='option']").change(function () {
    var selectedValue = $("input[name='option']:checked").val();

    var newData = [];
    var newCategories = [];
    var newMin = 0;
    var newMax = 400;

    switch (selectedValue) {
      case 'option1':
        newData = values;
        newCategories = contractNames
        newMin = 0;
        values.forEach(value => {
          if (parseFloat(value) > newMax){
            newMax = parseFloat(value)
          }
        })
        break;
      case 'option2':
        newData = risks;
        newCategories = contractNames
        newMin = 0;
        newMax = 1;
        break;
      case 'option3':
        newData = penalties;
        newCategories = contractNames
        newMin = 0;
        penalties.forEach(value => {
          if (parseFloat(value) > newMax){
            newMax = parseFloat(value)
          }
        })
        break;
    }
    newMax *= 1.1
    console.log(newMax)
    apexChart.updateOptions({
      xaxis: {
        categories: newCategories
      },
      yaxis: {
        min: newMin,
        max: newMax
      }
    });
    apexChart.updateSeries([{ data: newData }]);
    
  });

  $('#all-contract-combinations tbody').on('click', 'tr', function () {
    var table = $('#all-contract-combinations').DataTable();
    var rowData = table.row(this).data();
    console.log(rowData)
    let contracts = rowData.contains
    values = []
    risks = []
    penalties = []
    contractNames = []
    // let maxValue = 0;
    // let maxRisk = 0;
    // let maxPenalty = 0;
    contracts.forEach(contract => {
      values.push(contract.revenue)
      risks.push(contract.risk)
      penalties.push(contract.penalty)
      contractNames.push(contract.name)
    })
    // // Update the chart based on hiddenData and hiddenCategories from the clicked row
    apexChart.updateSeries([{ data: values}]);
    // apexChart.updateOptions({
    //     xaxis: {
    //         categories: contractNames
    //     }
    // });
});
})