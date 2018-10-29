let btns = document.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active")[0];
        current.className = current.className.replace(" active", "");
        this.className += " active";
        filterSelection(this.innerText.toLowerCase());
        console.log(this.innerText.toLowerCase());
    });
}

filterSelection("all");
function filterSelection(c) {
    console.log(c);
    let filterDiv = document.getElementsByClassName("filterDiv");
    if (c.toLowerCase() === "all") c = "";
    for (let i = 0; i < filterDiv.length; i++) {
        removeClass(filterDiv[i], "show");
        if (filterDiv[i].className.indexOf(c) > -1) {
            addClass(filterDiv[i], "show");
        }
    }
}
function addClass(element, name) {
    const elmClass = element.className.split(" ");
    const custName = name.split(" ");

    for (let i = 0; i < custName.length; i++) {
        if (elmClass[i].indexOf(custName[i]) === -1) {
            element.className += " " + name;
        }
    }
}
function removeClass(element, name) {
    const elmClass = element.className.split(" ");
    const custName = name.split(" ");

    for (let i = 0; i < custName.length; i++) {
        while (elmClass.indexOf(custName[i]) > -1) {
            elmClass.splice(elmClass.indexOf(custName[i]), 1);
        }
    }
    element.className = elmClass.join(" ");
}