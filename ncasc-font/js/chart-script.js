$(document).ready(function () {
  // Chart
  const myChart1 = $("#myChart1");
  if (myChart1) {
    let lineChart1 = new Chart(myChart1, {
      type: "line",
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      data: {
        labels: ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG"],
        datasets: [
          {
            label: "Male",
            data: [20, 50, 43, 29, 45, 39, 52],
            fill: false,
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: "Female",
            data: [30, 60, 53, 39, 65, 59, 72],
            fill: false,
            backgroundColor: "#1c5693",
            borderColor: "#1c5693",
          },
          {
            label: "Others",
            data: [40, 70, 63, 49, 85, 79, 97],
            fill: false,
            backgroundColor: "#d42c12",
            borderColor: "#d42c12",
          },
        ],
      },
    });
  }

  const myChart2 = $("#myChart2");
  const quadrants = {
    id: "quadrants",
    beforeDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, bottom, left, right },
        scales: { x, y },
      } = chart;
      ctx.save();
      quadrant(-10, 10, 0, 0, "#6C63F0");
      quadrant(0, 0, 0, 0, "#FB466C");
      quadrant(0, 10, 0, 0, "#ED589D");
      quadrant(-10, 0, 0, 0, "#3AACFF");
      function quadrant(xleft, ytop, xright, ybottom, color) {
        ctx.lineWidth = "3px";
        ctx.strokeStyle = color;
        ctx.strokeRect(
          x.getPixelForValue(xleft),
          y.getPixelForValue(ytop),
          x.getPixelForValue(xright) - left,
          y.getPixelForValue(ybottom) - top
        );
        ctx.restore();
      }
    },
  };
  if (myChart2) {
    let scatterChart = new Chart(myChart2, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Scatter",
            data: [
              {
                x: -10,
                y: 0,
              },
              {
                x: 0,
                y: 10,
              },
              {
                x: 10,
                y: -5,
              },
              {
                x: 0.5,
                y: 5.5,
              },
              {
                x: -9,
                y: -4,
              },
              {
                x: -2,
                y: -4,
              },
              {
                x: -6,
                y: 5,
              },
              {
                x: 5,
                y: 3,
              },
              {
                x: 9,
                y: -8,
              },
              {
                x: 2,
                y: 8,
              },
              {
                x: -5,
                y: -5,
              },
              {
                x: -3,
                y: -3,
              },
              {
                x: -1,
                y: 1,
              },
              {
                x: 1,
                y: 1,
              },
              {
                x: 8,
                y: -7,
              },
              {
                x: 9,
                y: 2,
              },
              {
                x: -7,
                y: -9,
              },
              {
                x: -2,
                y: -8,
              },
              {
                x: -1,
                y: 5,
              },
              {
                x: 4,
                y: 8,
              },
              {
                x: 5,
                y: -7,
              },
              {
                x: 5,
                y: 9,
              },
              {
                x: -3,
                y: -9,
              },
              {
                x: -2,
                y: -4,
              },
            ],
            backgroundColor: '#ED589D',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      plugins: [quadrants],
    });
  }

  const myChart3 = $("#myChart3");
  if (myChart3) {
    let barGraph = new Chart(myChart3, {
      type: "bar",
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
      },
      data: {
        labels: ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG"],
        datasets: [
          {
            label: "Male",
            data: [20, 50, 43, 29, 45, 39, 52],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgb(75, 192, 192)",
          },
          {
            label: "Female",
            data: [30, 60, 53, 39, 65, 59, 72],
            fill: false,
            borderColor: "#1c5693",
            backgroundColor: "#1c5693",
          },
        ],
      },
    });
  }

  const myChart4 = $("#myChart4");
  if (myChart4) {
    let doughnutChart = new Chart(myChart4, {
      type: "doughnut",
      options: {
        cutout: 60,
        radius: 80,
        responsive: true,
        maintainAspectRatio: false,
      },
      data: {
        labels: ["POKHATA", "KATHMANDU", "JHAPA", "MORANG", "DHARAN"],
        datasets: [
          {
            label: "My First Dataset",
            data: [40, 30, 15, 10, 5],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }
});
