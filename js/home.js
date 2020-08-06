console.log("home.js");

let boxes = document.querySelectorAll(".box");
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