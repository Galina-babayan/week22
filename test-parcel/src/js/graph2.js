import Chart from "chart.js/auto";

let json2 = `[
  {"США": 76.5},
  {"Китай": 53},
  {"Россия": 12.75},
  {"Бразилия": 12.5},
  {"Франция": 9.5},
  {"Италия": 9.5},
  {"Великобритания": 7.75},
  {"Германия": 7.75},
  {"Япония": 7.25}]`;

let data2 = JSON.parse(json2);

let country = [];
let count2 = [];

for (let i = 0; i < data2.length; i++) {
  console.log(data2[i]);
  for (let key in data2[i]) {
    country.push(key);
    console.log(country);

    count2.push(data2[i][key]);
    console.log(count2);
  }
}

const config = {
  type: "bar",
  data: {
    labels: country,

    datasets: [
      {
        label: "Страны",
        data: count2,
        backgroundColor: [
          "goldenrod",
          "rgb(197, 166, 134)",
          "rgb(134, 180, 197)",
          "rgb(181, 108, 36)",
          "#5f6c88",
          " rgb(175, 176, 226)",
          "#7a956b",
        ],
        borderColor: ["black"],
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  },
  options: {
    legend: {
      ticks: {
        color: "white",
      },
      labels: {
        color: "white",
        fontSize: 25,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "млн",
        },
        ticks: {
          color: "rgb(27, 29, 81)",
        },
      },
      x: {
        ticks: {
          color: "rgb(27, 29, 81)",
        },
      },
    },
  },
};

class Graph2 {
  constructor() {
    this.container = null;
    this.chart = null;
  }

  render(parentNode) {
    const container = document.createElement("div");
    container.classList.add("graph");

    const canvas = document.createElement("canvas");

    const chart = new Chart(canvas, config);

    container.append(canvas);
    parentNode.append(container);

    this.container = container;
    this.chart = chart;
  }
}

export default Graph2;
