let openBtn = document.getElementById("open-button");
let closeBtn = document.getElementById("closeBtn");
let myForm = document.getElementById("myForm");

openBtn.addEventListener("click", function () {
    myForm.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    myForm.style.display = "none";
});