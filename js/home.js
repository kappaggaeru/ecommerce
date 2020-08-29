console.log("homeeeeeeeee.js");
let boxes = document.querySelectorAll(".seeProduct");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click",seeProduct);
}
let slider = document.createElement("script"); 
let produ = document.createElement("script");
slider.type = "text/javascript";
produ.type = "text/javascript";
function seeProduct(){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            container.innerHTML = this.responseText;
            slider.src = "js/slider.js";
            produ.src = "js/product.js";
            head.appendChild(slider);
            head.appendChild(produ);
            console.log("product with ajax");
        }
    };
    xhttp.open("GET", "product.html", true);
    xhttp.send();
}
// .addEventListener("click",()=>{};

// let promos = document.querySelectorAll(".promoCarousel");
// let indicators = document.querySelectorAll(".promoIndicator");
// let promoActive = 0;
// hideAllPromos();
// changeCarousel();
function hideAllPromos(){
    for (let i = 0; i < promos.length; i++) {
        promos[i].classList.add("hidden");
        indicators[i].classList.remove("active");
    }
}
function changeCarousel(){
    hideAllPromos();
    promos[promoActive].classList.remove("hidden");
    indicators[promoActive].classList.toggle("active");
    promoActive++;
    if(promoActive == promos.length){
        promoActive = 0;
    }
    setTimeout(changeCarousel,25000);
}