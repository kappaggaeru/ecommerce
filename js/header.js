"use strict";
console.log("header.js");
//elements
let sideBar = document.querySelector(".sideBar");
let searchBar = document.querySelector(".searchBar");
let cart = document.querySelector(".cart");
// let navBar = document.querySelector(".topBar");
let navBar = document.querySelector('nav[name="nav"]');


//buttons
let openBurger = document.querySelector("#openBurger");
let closeBurger = document.querySelector("#closeBurger");
let openCart = document.querySelector("#openCart");
let closeCart = document.querySelector("#closeCart");

//acctions on ready
sideBar.classList.add("closed");//empieza cerrada
searchBar.classList.add("hidden");
closeBurger.classList.add("hidden");
cart.classList.add("closed");

//sidebar interaction
openBurger.addEventListener("click",function(){
    openBurger.classList.toggle("hidden");
    closeBurger.classList.toggle("hidden");
    if(sideBar.classList.contains("closing"))sideBar.classList.toggle("closing");
    sideBar.classList.toggle("opening");
    sideBar.classList.toggle("closed");
});
closeBurger.addEventListener("click",function(){
    closeBurger.classList.toggle("hidden");
    openBurger.classList.toggle("hidden");
    sideBar.classList.toggle("opening");
    sideBar.classList.toggle("closing");
    sideBar.classList.toggle("closed");
});

// searchbar interaction
document.querySelector("#search").addEventListener("click",function(){
    searchBar.classList.remove("hidden");
    navBar.classList.add("hidden");
});
document.querySelector("#closeSearch").addEventListener("click",function(){
    searchBar.classList.add("hidden");
    navBar.classList.remove("hidden");
});

openCart.addEventListener("click",function(){
    if(cart.classList.contains("closing"))cart.classList.toggle("closing");
    cart.classList.toggle("opening");
    cart.classList.toggle("closed");
});
closeCart.addEventListener("click",function(){
    cart.classList.toggle("opening");
    cart.classList.toggle("closing");
    cart.classList.toggle("closed");
});


let s = document.createElement("script");
s.type = "text/javascript";
let head = document.querySelector("#head");
let container = document.querySelector(".container");
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    container.innerHTML = this.responseText;
    s.src = "js/home.js";
    head.appendChild(s);
    console.log("home with ajax");
  }
};
xhttp.open("GET", "home.html", true);
xhttp.send();

// footer

let titlesFooter = document.querySelectorAll(".titleFooter");
let contentFooter = document.querySelectorAll(".contentFooter");
let dropsFooter = document.querySelectorAll(".imgDrop");

for (let i = 0; i < titlesFooter.length; i++) {
    titlesFooter[i].addEventListener("click",()=>{
        contentFooter[i].classList.toggle("hidden");
        if(contentFooter[i].classList.contains("hidden")){
            dropsFooter[i].src = "icons/dropDownWhite.png";
        }else{
            dropsFooter[i].src = "icons/dropUpWhite.png";
        }
    });
}
for (let i = 0; i < titlesFooter.length; i++) {
    contentFooter[i].classList.toggle("hidden");
}