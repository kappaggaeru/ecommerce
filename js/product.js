let sizesDiv = document.querySelector('div[name="sizesDropdown"]');
let sizesDrop = document.querySelector('img[name="sizesDrop"]');

let descDiv = document.querySelector('div[name="descriptionDrowdown"]');
let descDrop = document.querySelector('img[name="descDrop"]');

let dropUp = "images/icons/dropUp.png";
let dropDown = "images/icons/dropDown.png";

let comboQuantity = document.querySelector('.quanInput');
let quantity = 0;
quantity = comboQuantity.value;

document.querySelector('img[name="quantityMinus"]').addEventListener("click",function(){
    if(quantity > 1){
        quantity--;
        comboQuantity.value = quantity;
    }
});
document.querySelector('img[name="quantityPlus"]').addEventListener("click",function(){
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