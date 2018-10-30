let ul = document.getElementById("id01");
let btn = document.getElementById("btnSort");
btn.addEventListener("click", sortList);
function sortList() {
    let i;
    let switchCount = 0;
    let swiching = true;
    let dir = "asc";
    let shouldSwitch;
    console.log('----' + dir);
    while (swiching) {
        swiching = false;
        let li = ul.getElementsByTagName("li");
        for (i = 0; i < (li.length - 1); i++) {
            shouldSwitch = false;
            console.log(dir);
            if (dir === "asc") {
                if (li[i].innerHTML.toLowerCase() > li[i + 1].innerHTML.toLowerCase()) {
                    console.log(li[i].innerHTML.toLowerCase() + '>' + li[i + 1].innerHTML.toLowerCase())
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (li[i].innerHTML.toLowerCase() < li[i + 1].innerHTML.toLowerCase()) {
                    console.log(li[i].innerHTML.toLowerCase() + '<' + li[i + 1].innerHTML.toLowerCase())
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            console.log([li[i].innerHTML, li[i + 1].innerHTML]);
            li[i].parentNode.insertBefore(li[i + 1], li[i]);
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
