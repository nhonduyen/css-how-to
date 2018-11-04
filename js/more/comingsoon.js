"use strict";

const deadline = new Date(document.getElementById("time").getAttribute("datetime")).getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = deadline - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);

    document.getElementById("time").innerText = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);

        document.getElementById("time").innerText = "Expired";
    }
}, 1000);