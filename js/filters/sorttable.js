let tb = document.getElementById("myTable");
let btn = document.getElementById("btnSort");
btn.addEventListener("click", sortTable);
function sortTable() {
    let i;
    let switchCount = 0;
    let swiching = true;
    let dir = "asc";
    let shouldSwitch;
    console.log('----' + dir);
    while (swiching) {
        swiching = false;
        let rows = tb.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            console.log(dir);
            let row1 = rows[i].getElementsByTagName("td")[0];
            let row2 = rows[i + 1].getElementsByTagName("td")[0];
            
            if (dir === "asc") {
                if (row1.innerHTML.toLowerCase() > row2.innerHTML.toLowerCase()) {
                    console.log(rows[i].innerHTML.toLowerCase() + '>' + rows[i + 1].innerHTML.toLowerCase())
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (row1.innerHTML.toLowerCase() < row2.innerHTML.toLowerCase()) {
                    console.log(rows[i].innerHTML.toLowerCase() + '<' + rows[i + 1].innerHTML.toLowerCase())
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            swiching = true;
            switchCount++;
            console.log(switchCount);
        }
        else {
            if (switchCount === 0 && dir === "asc") {
                dir = "desc";
                swiching = true;
            }
        }
    }
    console.log(switchCount);
}
