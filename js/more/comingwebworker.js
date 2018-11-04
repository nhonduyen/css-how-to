"use strict";

if (typeof (Worker)) {
    let worker = new Worker("comingsoon.js");
    console.log(worker);
    worker.onmessage = (event) => {
        if (event.data == false) {
            document.getElementById("time").innerText = "Expired";
        } else {
            document.getElementById("time").innerText = event.data;
        }
    }
} else {
    alert("Your browser does not support web worker");
}