"use strict";

let slideIndex = 1;
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.getElementsByClassName("dot");

showSlide(slideIndex);
next.addEventListener("click", function () { plusSlides(1); });
prev.addEventListener("click", function () { plusSlides(-1); });
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        currentSlides(parseInt(dots[i].getAttribute("data-slide")));
    });
}
function plusSlides(n) {
    showSlide(slideIndex += n);
}
function currentSlides(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("mySlides");
    console.log(slideIndex);
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log(slideIndex - 1);
}