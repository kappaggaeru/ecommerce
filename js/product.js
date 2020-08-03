let sizesDiv = document.querySelector('div[name="sizesDropdown"]');
let sizesDrop = document.querySelector('img[name="sizesDrop"]');

let descDiv = document.querySelector('div[name="descriptionDrowdown"]');
let descDrop = document.querySelector('img[name="descDrop"]');

let dropUp = "icons/dropUp.png";
let dropDown = "icons/dropDown.png";

let comboQuantity = document.querySelector('#quanInput');
let quantity = 0;
quantity = comboQuantity.value;

document.querySelector('#btnMinusQuan').addEventListener("click",function(){
    if(quantity > 1){
        quantity--;
        comboQuantity.value = quantity;
    }
});
document.querySelector('#btnPlusQuan').addEventListener("click",function(){
    if(quantity < 10){
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
    switch(n) {
        case 0: res += "XS"; break;
        case 1: res += "S"; break;
        case 2: res += "M"; break;
        case 3: res += "L"; break;
        case 4: res += "XL"; break;
        case 5: res += "XXL"; break;
    }
    sizeLabel.innerHTML = res; 
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
    switch(n) {
        case 0: res += "Orange"; break;
        case 1: res += "Lightblue"; break;
        case 2: res += "Green"; break;
        case 3: res += "Red"; break;
        case 4: res += "Purple"; break;
        case 5: res += "Dark"; break;
    }
    colorLabel.innerHTML = res; 
}