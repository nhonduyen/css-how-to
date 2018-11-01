const text = "Scroll back up again to remove the sticky position.";
for (let i = 0; i < 100; i++) {
    let p = document.createElement("p");
    p.innerText = text;
    document.getElementById("content").appendChild(p);
}
let header = document.getElementById("myHeader");
let sticky = header.offsetTop;
function scrolling() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
window.onscroll = function () { scrolling(); }