var slideIndex = 1;
showSlide(slideIndex);
function plusSlide(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log(n, slideIndex - 1);
}