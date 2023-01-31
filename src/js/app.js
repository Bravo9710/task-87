import "../scss/app.scss";
const R = require('ramda');

window.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll("article");

  let arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];

  arrayToPluck = R.pluck('class', arrayToPluck)

  articles.forEach((article, index) => {
    article.classList.add(arrayToPluck[index]);
  })
});
