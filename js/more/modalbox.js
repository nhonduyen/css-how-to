let modal = document.getElementById("modal");
const close = document.getElementById("close");
const btn = document.getElementById("btnOpen");

btn.addEventListener("click", function () {
    modal.style.display = "block";
});
close.addEventListener("click", function () {
    modal.style.display = "none";
});
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
