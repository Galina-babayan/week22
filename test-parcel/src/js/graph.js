import Chart from "chart.js/auto";

let json = `[
{"Шотландская": 790 },
{"Мейн-кун": 680},
{"Британская": 500},
{"Бенгальская": 285},
{"Сфинкс": 200},
{"Ориентал": 186},
{"Сиамская": 160},
{"Сибирская": 125},
{"Бурма": 120},
{"Абиссинская": 110}]`;

let data1 = JSON.parse(json);

let breed = [];
let count = [];

for (let i = 0; i < data1.length; i++) {
  console.log(data1[i]);
  for (let key in data1[i]) {
    breed.push(key);
    console.log(breed); 
    
    count.push(data1[i][key]);
    console.log(count); 
  }
}

const config = {
  type: "line",
  data: {
    labels: breed,
    datasets: [
      {
        label: "График 1",
        backgroundColor: "transparent",
        borderColor: " rgb(27, 29, 81)",
        data: count,
      },
    ],
  },
  options: {
    legend: {
      labels: {
        color: "white",
        fontSize: 25,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "тыс",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "rgb(27, 29, 81)",
        },
      },
      y: {
        title: {
          display: true,
          text: "запросов в месяц",
        },
        ticks: {
          color: "rgb(27, 29, 81)",
        },
      },
    },
  },
};

class Graph {
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

export default Graph;
