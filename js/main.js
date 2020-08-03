"use strict";
console.log("hello world");
//elements
let sideBar = document.querySelector(".sideBar");
let searchBar = document.querySelector(".searchBar");
let cart = document.querySelector(".cart");
let navBar = document.querySelector(".topBar");

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

let footAbout = document.querySelector('div[name="footAboutDrop"]');
let footInfo = document.querySelector('div[name="footInfoDrop"]');

let imgFootAbout = document.querySelector('img[name="footImgAbout"]');
let imgFootInfo = document.querySelector('img[name="footImgInfo"]');

let whiteDropDown = "icons/dropDownWhite.png";
let whiteDropUp = "icons/dropUpWhite.png";

document.querySelector('div[name="footAbout"]').addEventListener("click",function(){
    footAbout.classList.toggle("hidden");
    if(footAbout.classList.contains("hidden")){
        imgFootAbout.src = whiteDropDown;
    }else{
        imgFootAbout.src = whiteDropUp;
    }
});
document.querySelector('div[name="footInfo"]').addEventListener("click",function(){
    footInfo.classList.toggle("hidden");
    if(footInfo.classList.contains("hidden")){
        imgFootInfo.src = whiteDropDown;
    }else{
        imgFootInfo.src = whiteDropUp;
    }
});