let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// imagesModal
let imagesModal = document.querySelector("#imagesModal");
let images = document.querySelectorAll(".imgModal");
let imgModal = document.querySelector(".modal-content");
let caption = document.querySelector("#caption");
for (let i = 0; i < images.length; i++) {
	images[i].addEventListener("click",()=>{
		imagesModal.classList.toggle("hidden");
		imgModal.src = images[i].src;
		caption.innerHTML = images[i].alt;
	});
}
document.querySelector("#closeImgModal").addEventListener("click",()=>{
	imagesModal.classList.toggle("hidden");
});

// sizesModal
let sizesModal = document.querySelector("#sizesModal");
document.querySelector(".sizesGuide").addEventListener("click",()=>{
	sizesModal.classList.toggle("hidden");
});
document.querySelector("#closeSizesModal").addEventListener("click",()=>{
	sizesModal.classList.toggle("hidden");
});