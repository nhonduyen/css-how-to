"use strict";
// store all images DOM in array
let lazyImgs = [].slice.call(document.getElementsByClassName("lazy-img"));
console.log(lazyImgs.length);

function elementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0
        && rect.left >= 0
        && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function handleScroll() {
    for (let i = lazyImgs.length - 1; i >= 0; i--) {
        if (elementInViewport(lazyImgs[i])) {
            if (lazyImgs[i].getAttribute("data-src")) {
                lazyImgs[i].src = lazyImgs[i].getAttribute("data-src");
                lazyImgs[i].classList.toggle("visible");
                lazyImgs[i].removeAttribute("data-src");
                lazyImgs.splice(i, 1);
                console.log("img " + i + " in view port");
            }
        }
    }
}
function processLoadImgs() {
    console.log("Scroll event to get image. length: " + lazyImgs.length);
    if (lazyImgs.length > 0) {
        console.log("Scroll to get image. length: " + lazyImgs.length);
        let debounceTimer;
        if (debounceTimer) {
            this.window.clearTimeout(debounceTimer);
        }
        debounceTimer = this.window.setTimeout(() => {
            handleScroll();
        }, 100);
    }
}
function registerListener(evt, fn) {
    window.addEventListener ? window.addEventListener(evt, fn, false) : (window.attachEvent)
        ? window.attachEvent("on" + evt, fn) : window["on" + evt] = fn;
}
window.onload = handleScroll;
registerListener("scroll", processLoadImgs);
registerListener("resize", handleScroll);
registerListener("orientationChange", handleScroll);
