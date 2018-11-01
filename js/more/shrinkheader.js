
for (let i = 0; i < 100; i++) {
    const text = "Scroll back up again to remove the sticky position.";
    let p = document.createElement("p");
    p.innerText = text;
    document.getElementById("content").appendChild(p);
}
function scrolling() {
    let header = document.getElementById("myHeader");
    console.log([document.body.scrollTop, document.documentElement.scrollTop]);
    if (document.documentElement.scrollTop > 50) {
        header.style.fontSize = "30px"
        console.log(30);
    } else {
        header.style.fontSize = "90px"
        console.log(90);
    }
}
window.onscroll = function () { scrolling(); }