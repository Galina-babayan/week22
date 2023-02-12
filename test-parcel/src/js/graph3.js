import Chart from "chart.js/auto";

let json3 = `[
  {"из любви - 20%": 20},
  {"по просьбе детей, внуков - 16%": 16},
  {"для радости, успокоения - 16%": 16},
  {"чтобы ловили мышей - 12%": 12},
  {"приютили с улицы - 11%": 11}]`;

let data3 = JSON.parse(json3);

let reason = [];
let count3 = [];

for (let i = 0; i < data3.length; i++) {
  console.log(data3[i]);
  for (let key in data3[i]) {
    reason.push(key);
    console.log(reason);

    count3.push(data3[i][key]);
    console.log(count3);
  }
}

const config = {
  type: "pie",
  data: {
    labels: reason,
    datasets: [
      {
        label: "Страны",
        data: count3,
        backgroundColor: [
          "rgb(197, 166, 134)",
          "rgb(134, 180, 197)",
          "rgb(181, 108, 36)",
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
      labels: {
        color: "rgb(27, 29, 81)",
        fontSize: 25,
      },
    },
    title: {
      display: true,
      text: "Пример Chart.js",
    },
  },
};

class Graph3 {
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

export default Graph3;
