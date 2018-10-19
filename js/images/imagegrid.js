function splitColumn(elm, n) {
    let elements = document.getElementsByClassName("column");
    let actives = document.getElementsByClassName("active");
    const percent = n * 100;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = percent + "%";
        elements[i].style.flex = percent + "%";
    }
    for (let i = 0; i < actives.length; i++) {
        actives[i].classList.remove("active");
    }
    elm.classList.toggle("active");
    console.log(percent + "%");
}
/* lazy load images
let lazyloadImages = document.getElementsByClassName("lazy");
function lazyLoad() {
    var lazyLoadThrottleTimeOut;
    if (lazyLoadThrottleTimeOut) {
        clearTimeout(lazyLoadThrottleTimeOut);
    }
    lazyLoadThrottleTimeOut = setTimeout(function () {
        let scrollTop = window.pageYOffset;
        for (let i = 0; i < lazyloadImages.length; i++) {
            if (lazyloadImages[i].offsetTop < (window.innerHeight + scrollTop)) {
                lazyloadImages[i].src = lazyloadImages[i].dataset.src;
                lazyloadImages[i].classList.remove("lazy");
            }
        }

        if (lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyLoad);
            window.removeEventListener("resize", lazyLoad);
            window.removeEventListener("orientationChange", lazyLoad);
        }
    }, 20);
    console.log(lazyLoadThrottleTimeOut);
}
// load first 5 images
if (lazyloadImages.length > 0) {
    for (let i = 0; i < 6; i++) {
        lazyloadImages[i].src = lazyloadImages[i].dataset.src;
        lazyloadImages[i].classList.remove("lazy");
    }
}

document.addEventListener("scroll", lazyLoad);
window.addEventListener("resize", lazyLoad);
window.addEventListener("orientationChange", lazyLoad);
*/