let input = document.getElementById("myInput");
let btn = document.getElementById("btn");
let myDropdown = document.getElementById("myDropdown");

input.addEventListener("keyup", search);
btn.addEventListener("click", showDropdown);

function search() {
    const filter = input.value.toUpperCase();
    let a = myDropdown.getElementsByTagName("a");

    for (let i = 0; i < a.length; i++) {
        if (a[i] && a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
function showDropdown(){
    myDropdown.classList.toggle("show");
}