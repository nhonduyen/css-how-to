let input = document.getElementById("myInput");
input.addEventListener("keyup", search);
function search() {
    const filter = input.value.toUpperCase();
    const table = document.getElementById("myTable");
    let trs = table.getElementsByTagName("tr");

    for (let i = 0; i < trs.length; i++) {
        const td = trs[i].getElementsByTagName("td")[0];
        if (td && td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            trs[i].style.display = "";
        } else {
            trs[i].style.display = "none";
        }
    }
}