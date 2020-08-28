// console.log("product.js");

let sizesDiv = document.querySelector('div[name="sizesDropdown"]');
let sizesDrop = document.querySelector('img[name="sizesDrop"]');

let descDiv = document.querySelector('div[name="descriptionDrowdown"]');
let descDrop = document.querySelector('img[name="descDrop"]');

let dropUp = "icons/dropUp.png";
let dropDown = "icons/dropDown.png";

let comboQuantity = document.querySelector('#quantity');
let quantity = 0;
quantity = comboQuantity.value;

let image = "images/nelson1.jpg";
let productName = "";
let price = "";
let color = "";
let size = "";
let units = 0;

document.querySelector('#btnMinusQuan').addEventListener("click",function(){
    if(quantity > 1){
        quantity--;
        comboQuantity.value = quantity;
    }
});
document.querySelector('#btnPlusQuan').addEventListener("click",function(){
    if(quantity < 100){
        quantity++;
        comboQuantity.value = quantity;
    }
});

document.querySelector('div[name="toggleSizes"]').addEventListener("click", function(){
    sizesDiv.classList.toggle("hidden");
    if(sizesDiv.classList.contains("hidden")){
        sizesDrop.src = dropDown;
    }else{
        sizesDrop.src = dropUp;
    }
});

document.querySelector('div[name="toggleDesc"]').addEventListener("click", function(){
    descDiv.classList.toggle("hidden");
    if(descDiv.classList.contains("hidden")){
        descDrop.src = dropDown;
    }else{
        descDrop.src = dropUp;
    }
});

let sizes = document.querySelectorAll('.size');
for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click",function(){
        unactiveAllSizes();
        sizes[i].classList.toggle("active");
        updateSizeLabel(i);
    });
}
function unactiveAllSizes(){
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].classList.remove("active");
    }
}

let sizeLabel = document.querySelector('div[name="sizeDiv"]');
function updateSizeLabel(n){
    let res = "Size: ";
    let s = "";
    switch(n) {
        case 0: s = "XS"; break;
        case 1: s = "S"; break;
        case 2: s = "M"; break;
        case 3: s = "L"; break;
        case 4: s = "XL"; break;
        case 5: s = "XXL"; break;
    }
    size = s;
    sizeLabel.innerHTML = res + s; 
}

let colors = document.querySelectorAll('.color');
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click",function(){
        unactiveAllColors();
        colors[i].classList.toggle("active");
        updateColorLabel(i);
    });
}
function unactiveAllColors(){
    for (let i = 0; i < colors.length; i++) {
        colors[i].classList.remove("active");
    }
}

let colorLabel = document.querySelector('div[name="colorDiv"]');
function updateColorLabel(n){
    let res = "Color: ";
    let c = "";
    switch(n) {
        case 0: c = "Orange"; break;
        case 1: c = "Lightblue"; break;
        case 2: c = "Green"; break;
        case 3: c = "Red"; break;
        case 4: c = "Purple"; break;
        case 5: c = "Dark"; break;
    }
    color = c;
    colorLabel.innerHTML = res + c; 
}
// document.querySelector(".addToCart").addEventListener("click",()=>{
//     units = comboQuantity.value;
//     console.log("Units selected: "+units);
//     productName = document.querySelector(".productName").getAttribute("myData");
//     price = document.querySelector(".productPrice").getAttribute("myData");
//     let string = [productName,price,size,color,units,image];
//     let i = getTotalOfCookies();
//     setCookie(getTotalOfCookies(),string,1);
//     updateCart(i);
// });

