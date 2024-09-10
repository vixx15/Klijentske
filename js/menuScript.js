let myOrders = document.getElementById("myOrders");
console.log(myOrders);
let parRacun = document.getElementById("parRacun");
let products = document.getElementsByClassName("product");
console.log(products);
let labels = document.getElementsByTagName("label");
console.log(labels);
let userInfo = document.querySelector("#userInfo");
console.log(userInfo);

console.log("Parent node myOrders: ", myOrders.parentNode)
console.log("Child node myOrders", myOrders.childNodes)

console.log("myOrders next sibling: ", myOrders.nextElementSibling);
console.log("myOrders previous sibling ", myOrders.previousSibling)

let coffee = document.querySelector("#Cappucino").parentNode.childNodes[1];
console.log(coffee);
console.log(coffee.textContent);
coffee.textContent = "Coffee"

let title = document.querySelector(".flexColumn > .titleText");
console.log(title);
console.log(title.innerHTML);
title.innerHTML = "<h2>Place an order</h2>"

let forme = document.forms;
console.log(forme)

let forma = document.forms["forma"]
console.log(forma)

forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let vrednost = forma["kreditna"].checked
    console.log("Korisnik je izabrao kreditnu karticu " + vrednost)
 })
 

