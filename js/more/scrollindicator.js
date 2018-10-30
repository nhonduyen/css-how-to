
window.onscroll = function () {
    myScroll()
};
function myScroll() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    console.log([winScroll, height, scrolled]);
    //console.log("onscroll: " + scrolled);
}
const text = "<p>Some text <a href='./../../more.html'>more</a></p>";
let content = text;
for (let i = 0; i < 100; i++) {
    content += text;
}
document.getElementById("content").innerHTML += content;