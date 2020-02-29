
var response
fetch('http://103.137.184.84:3001/chart', {
  // mode: 'cors',
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
})
.then(response => response.json())
.then(json => {
  response = json
  console.log(response)
})
const dashboardNASDAQChart = {
  data: canvas => {
    return {
      // labels: [
      //   "1",
      //   "2",
      //   "3",
      //   "4",
      //   "5",
      //   "6",
      //   "7",
      //   "8",
      //   "9",
      //   "10"
      // ],
      labels: response.time,
      datasets: [
        {
          // data: [26, 27, 26, 28, 26, 29, 30, 29, 28, 27],
          data: response.temp,
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8
        },
        {
          // data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45],
          data: response.ph,
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8
        }
      ]
    }
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
  }
};

const luxChart = {
  data: canvas => {
    return {
      // labels: [
      //   "1",
      //   "2",
      //   "3",
      //   "4",
      //   "5",
      //   "6",
      //   "7",
      //   "8",
      //   "9",
      //   "10"
      // ],
      labels: response.time,
      datasets: [
        {
          // data: [26, 27, 26, 28, 26, 29, 30, 29, 28, 27],
          data: response.lux,
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8
        }
      ]
    }
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
  }
};

const dashboard24HoursPerformanceChart = {
  data: canvas => {
    return {
      // labels: [
      //   "1",
      //   "2",
      //   "3",
      //   "4",
      //   "5",
      //   "6",
      //   "7",
      //   "8",
      //   "9",
      //   "10"
      // ],
      labels: response.time,
      datasets: [
        {
          borderColor: "#0000FF",
          backgroundColor: "#0000FF",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          // data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484, 490, 450]
          data: response.amoniac
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          // data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420, 420, 400]
          data: response.cacbonic
        },
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          // data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354, 360, 370]
          data: response.oxy
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          // data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484, 490, 450]
          data: response.turb
        },
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f"
          }
        }
      ]
    }
  }
};


const dashboardEmailStatisticsChart = {
  data: canvas => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};


module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
  luxChart
};
