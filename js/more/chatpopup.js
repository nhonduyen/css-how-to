"use strict";

const btnClose = document.getElementById("btnClose");
const btnOpen = document.getElementById("btnOpen");

btnOpen.addEventListener("click", function () {
    document.getElementById("chatForm").style.display = "block";
});
btnClose.addEventListener("click", function () {
    document.getElementById("chatForm").style.display = "none";
});
