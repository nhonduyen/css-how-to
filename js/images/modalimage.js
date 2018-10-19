
let modalImg = document.getElementById("img1");
let modal = document.getElementById("myModal");
let img = document.getElementById("myImg");
let captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log(captionText.innerHTML);
}
let close = document.getElementsByClassName("close")[0];
close.onclick = function () {
    console.log("close");
    modal.style.display = "none";
}