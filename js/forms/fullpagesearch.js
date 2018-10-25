let btnOpen = document.getElementById("btnOpen");
let btnClose = document.getElementById("btnClose");

btnOpen.addEventListener("click", function () {
    console.log("open");
    const ovelay = document.getElementById("myOverlay");
    ovelay.style.display = "block";
});
btnClose.addEventListener("click", function () {
    console.log("close");
    const ovelay = document.getElementById("myOverlay");
    ovelay.style.display = "none";
});
