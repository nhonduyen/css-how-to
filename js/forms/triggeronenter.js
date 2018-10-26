let btn = document.getElementById("btnSubmit");
let txt = document.getElementById("myCheck");

txt.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btn.click();
    }
}
);
btn.addEventListener("click", function () {
    alert("click button");
})