"use strict";

const batt = ["fa fa-battery-1", "fa fa-battery-2", "fa fa-battery-3", "fa fa-battery-4", "fa fa-battery-5"];
const sand = ["fa fa-hourglass-0", "fa fa-hourglass-1", "fa fa-hourglass-2", "fa fa-hourglass-3"]

showAnimate("battery", "fa fa-battery-0", batt);
setInterval(function () { showAnimate("battery", "fa fa-battery-0", batt); }, 5000);
showAnimate("sandclock", "fa fa-hourglass-start", sand);
setInterval(function () { showAnimate("sandclock", "fa fa-hourglass-start", sand); }, 5000);
showAnimate("chain", "fa fa-chain", ["fa fa-chain", "fa fa-chain-broken"]);
setInterval(function () { showAnimate("chain", "fa fa-chain", ["fa fa-chain", "fa fa-chain-broken"]); }, 3000);
showAnimate("star", "fa fa-star-o", ["fa fa-star-half-empty", "fa fa-star"]);
setInterval(function () { showAnimate("star", "fa fa-star-o", ["fa fa-star-half-empty", "fa fa-star", "fa fa-star-o"]); }, 4000);
showAnimate("folder", "fa fa-folder", ["fa fa-folder", "fa fa-folder-o"]);
setInterval(function () { showAnimate("folder", "fa fa-folder", ["fa fa-folder", "fa fa-folder-o"]); }, 3000);

showAnimate("smile", "fa fa-smile", ["fa fa-smile-o", "fa fa-meh-o", "fa fa-frown-o"]);
setInterval(function () { showAnimate("smile", "fa fa-smile-o", ["fa fa-smile-o", "fa fa-meh-o", "fa fa-frown-o"]); }, 4000);
showAnimate("hand", "fa fa-hand-o-up", ["fa fa-hand-o-up", "fa fa-hand-o-right", "fa fa-hand-o-down", "fa fa-hand-o-left"]);
setInterval(function () { showAnimate("hand", "fa fa-hand-o-up", ["fa fa-hand-o-up", "fa fa-hand-o-right", "fa fa-hand-o-down", "fa fa-hand-o-left"]); }, 5000);


function showAnimate(id, baseClass, classList) {
    let icon = document.getElementById(id);
    icon.className = baseClass;
    for (let i = 0; i < classList.length; i++) {
        setTimeout(function () {
            icon.className = classList[i];
        }, 1000 * (i + 1));
    }
}