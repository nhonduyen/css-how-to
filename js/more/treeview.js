let toggle = document.getElementsByClassName("caret");

for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener("click", function () {
        console.log(toggle[i].parentElement.querySelector(".nested"));
        toggle[i].parentElement.querySelector(".nested").classList.toggle("active");
        toggle[i].classList.toggle("caret-down");
    });
}
