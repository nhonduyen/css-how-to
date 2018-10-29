let input = document.getElementById("myInput");
input.addEventListener("keyup", search);
function search() {
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("singers");
    let li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}