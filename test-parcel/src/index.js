import Graph from "./js/graph";
import Graph2 from "./js/graph2";
import Graph3 from "./js/graph3";

import moment from "moment";
moment().format();
const now = moment();


const graphContainer = document.querySelector(".graph-container");
const graph = new Graph();
graph.render(graphContainer);

const graph2Container = document.querySelector(".graph2-container");
const graph2 = new Graph2();
graph2.render(graph2Container);

const graph3Container = document.querySelector(".graph3-container");
const graph3 = new Graph3();
graph3.render(graph3Container);

let form = document.querySelector("#formSecond");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const button = document.querySelector("button");
const comments = document.querySelector("#comments");
const textarea = document.querySelector("#comment");

button.addEventListener("click", addList);

class List {
  constructor(text) {
    this.text = text;
  }

  render2(parentNode2) {
    const filterWords = ["viagra", "xxx"];
    let filteredText = this.text;
    for (let word of filterWords) {
      let reg = new RegExp(word, "ig");
      filteredText = filteredText.replace(reg, "***");
    }
    let date = now.format("dddd, MMMM DD YYYY, h:mm:ss");
    console.log(date);
    // пустой контейнер:
    let node = document.createElement("div");
    node.classList.add("comment");

    let textNode = document.createElement("div");
    textNode.classList.add("comment__text");
    textNode.textContent = filteredText;

    let dateNode = document.createElement("div");
    dateNode.classList.add("comment__name");
    dateNode.textContent = date;

    node.append(dateNode);

    node.append(textNode);
    parentNode2.append(node);
  }
}

let arrCommentsList = [];
let arrLocalCommentsList = JSON.parse(localStorage.getItem("comments")) || []; // дадим массиву новое название после извлечения из хранилища

for (let i = 0; i < arrLocalCommentsList.length; i++) {
  const localComment = arrLocalCommentsList[i];
  const comment = new List(localComment.text, localComment.date);
  arrCommentsList.push(comment);
}
render2(comments, arrCommentsList);

function addList() {
  let text = textarea.value;
  textarea.value = "";
  let num = new Date();
  let date;
  if (num.getMonth() + 1 < 10) {
    date = `${num.getDate()}.0${num.getMonth() + 1}.${num.getFullYear()}`;
  } else {
    date = `${num.getDate()}.${num.getMonth() + 1}.${num.getFullYear()}`;
  }

  let comment = new List(text, date);
  arrCommentsList.push(comment);

  // преобразуем массив комментариев в строку и отправим в хранилище:
  localStorage.setItem("comments", JSON.stringify(arrCommentsList));

  comments.innerHTML = "";
  //  вызываем render и рисуем весь список комментариев:
  render2(comments, arrCommentsList);
}

// эта функция будет рисовать весь
// список комментариев:
function render2(parentNode2, data) {
  for (let i = 0; i < data.length; i++) {
    let item = data[i]; // элемент массива - это экземпляр класса, а значит у него есть метод render:
    item.render2(parentNode2);
  }
}
