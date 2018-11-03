"use strict";

const deadline = new Date(document.getElementById("deadline").getAttribute("datetime")).getTime();
console.log(deadline);
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = deadline - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);

    document.getElementById("time").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Expired";
    }
}, 1000);