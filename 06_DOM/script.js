// alert("welcome dom manupulation");

console.dir(document.body)
console.dir(document.head)

document.body.style.backgroundColor = "lightblue"

const title = document.getElementById("title")

title.setAttribute("class","TITLE")

const TITLE = document.querySelector(".TITLE")

    