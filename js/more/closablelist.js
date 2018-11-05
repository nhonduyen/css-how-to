"use strict";

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });
}