$(function () {
  var valueData = [355, 390, 300, 350, 390, 180, 355, 390];
  var riskData = [280, 250, 325, 215, 250, 310, 280, 250];
  var penaltyData = [200, 220, 180, 190, 210, 175, 220, 200];

  var chartOptions = {

    series: [{ name: "Value", data: valueData }],

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
      max: 400,
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
        newData = valueData;
        newCategories = ["ValueCat1", "ValueCat2", "ValueCat3", "ValueCat4", "ValueCat5", "ValueCat6", "ValueCat7", "ValueCat8"];
        newMin = 0;
        newMax = 400;
        break;
      case 'option2':
        newData = riskData;
        newCategories = ["RiskCat1", "RiskCat2", "RiskCat3", "RiskCat4", "RiskCat5", "RiskCat6", "RiskCat7", "RiskCat8"];
        newMin = 0;
        newMax = 350;
        break;
      case 'option3':
        newData = penaltyData;
        newCategories = ["PenaltyCat1", "PenaltyCat2", "PenaltyCat3", "PenaltyCat4", "PenaltyCat5", "PenaltyCat6", "PenaltyCat7", "PenaltyCat8"];
        newMin = 0;
        newMax = 250;
        break;
    }
    apexChart.updateSeries([{ data: newData }]);
    apexChart.updateOptions({
      xaxis: {
        categories: newCategories
      },
      yaxis: {
        min: newMin,
        max: newMax
      }
    });
  });

  $('#all-contract-combinations tbody').on('click', 'tr', function () {
    var table = $('#all-contract-combinations').DataTable();
    var rowData = table.row(this).data();
    // Update the chart based on hiddenData and hiddenCategories from the clicked row
    apexChart.updateSeries([{ data: [200, 200, 200, 200, 200, 200, 200, 200]}]);
    apexChart.updateOptions({
        xaxis: {
            categories: ["ship1", "ValueCat2", "ValueCat3", "ValueCat4", "ValueCat5", "ValueCat6", "ValueCat7", "ValueCat8"]
        }
    });
});



  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();



  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#49BEFF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})