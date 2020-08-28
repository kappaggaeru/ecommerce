function setCookie(cname, cvalue, exdays) {
	let d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";Secure" + ";path=/";
}
function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		    c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		    return c.substring(name.length, c.length);
		}
	}
	return "";
}
function deleteCookie(name){
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; path=/";
}
function getCookies(){
	return document.cookie;
}

let itemCart = document.querySelector("#itemCart");
let shadowCart = document.querySelector("#shadowCart");
let cartContainer = document.querySelector(".cartItems");
function checkCart(){
    if(getTotalOfCookies() == 0){
        alert("The cart is empty!");
    }else{
        deleteCart();
        for (let i = 0; i < getTotalOfCookies(); i++) {
            updateCart(i);
        }
    }
}
function updateCart(index){//genera los componentes iguales
    let newItemCart = itemCart.cloneNode(true);
    newItemCart.classList.remove("hidden");
    let newShadowCart = shadowCart.cloneNode(true);
    newShadowCart.classList.remove("hidden");
    cartContainer.appendChild(newItemCart);
    cartContainer.appendChild(newShadowCart);
    addDataToCart(index);
    updateCartTitle();
}
function addDataToCart(index){
    let name = document.querySelectorAll(".nameField");
    let price = document.querySelectorAll(".priceField");
    let size = document.querySelectorAll(".sizeField");
    let color = document.querySelectorAll(".colorField");
    let units = document.querySelectorAll(".unitsField");
    let image = document.querySelectorAll(".imageField");

    let cookie = getCookie(index).split(",");
    // console.log("index: "+index);
    // console.log(getCookie(index));
    // console.log(name.length);
    name[index].innerHTML = cookie[0];
    price[index].innerHTML = "$" + cookie[1];
    size[index].innerHTML = cookie[2];
    color[index].innerHTML = cookie[3];
    units[index].value = cookie[4];
    image[index].src = cookie[5];
}
function getTotalOfCookies(){
    let amount = getCookies().split(";");
    let res = amount.length;
    if(getCookies() == ""){
        console.log("There is no cookies");
        res = 0;
    }
    return res;
}
function updateCartTitle(){
    let cartTitle = document.querySelector(".cartTitle");
    cartTitle.innerHTML = "Cart (" + getTotalOfCookies() + ")";
}
function eraseCart(){
    let total = getTotalOfCookies();
    for (let i = 0; i < total; i++) {
        deleteCookie(i);
    }
    updateCartTitle();
    deleteCart();
}
function deleteCart(){
    console.log("deletinggg");
    for (let i = 0; i < cartContainer.children.length; i++) {
        cartContainer.removeChild(cartContainer.childNodes[i]);
    }
}
document.querySelector(".eraseCart").addEventListener("click",eraseCart);