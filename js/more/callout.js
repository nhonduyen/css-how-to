
let closebtns = document.getElementsByClassName("closebtn");
let btnCallout = document.getElementById("btnCallout");
for (let i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        callout.style.display = "none";
    });
}
btnCallout.addEventListener("click", function () {
    let callout = document.getElementById("callout");
    callout.style.display = "block";
});