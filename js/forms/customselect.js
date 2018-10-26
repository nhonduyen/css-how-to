let customSelect = document.getElementsByClassName("custom-select");

for (let i = 0; i < customSelect.length; i++) {
    let selectElement = customSelect[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    let div = document.createElement("div");
    div.setAttribute("class", "select-selected");
    div.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    customSelect[i].appendChild(div);
    /*for each element, create a new DIV that will contain the option list:*/
    let divOptions = document.createElement("div");
    divOptions.setAttribute("class", "selected-items select-hide");
    for (let j = 1; j < selectElement.length; j++) {
        /*for each option in the original select element,
   create a new DIV that will act as an option item:*/
        let divItems = document.createElement("div");
        divItems.innerHTML = selectElement.options[j].innerHTML;
        divItems.addEventListener("click", function () {
            /*when an item is clicked, update the original select box,
           and the selected item:*/
            let parentDiv = this.parentNode.parentNode.getElementsByTagName("select")[0];
            let prevSiblings = this.parentNode.previousSibling;
            for (let k = 0; k < parentDiv.length; k++) {
                if (parentDiv.options[k].innerHTML = this.innerHTML) {
                    parentDiv.selectedIndex = k;
                    prevSiblings.innerHTML = this.innerHTML;
                    let sameSelected = this.parentNode.getElementsByClassName("same-as-selected");
                    for (let h = 0; h < sameSelected.length; h++) {
                        sameSelected[h].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            prevSiblings.click();
        });
        divOptions.appendChild(divItems);
    }
    customSelect[i].appendChild(divOptions);
    div.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elm) {
    /*a function that will close all select boxes in the document,
 except the current select box:*/
    let arrNo = [];
    let selectItems = document.getElementsByClassName("selected-items");
    let selectSelected = document.getElementsByClassName("select-selected");
    for (let i = 0; i < selectSelected.length; i++) {
        if (elm == selectSelected[i]) {
            arrNo.push(i);
        } else {
            selectSelected[i].classList.remove("select-arrow-active");
        }
    }
    for (let i = 0; i < selectItems.length; i++) {
        if (arrNo.indexOf(i)) {
            selectItems[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);