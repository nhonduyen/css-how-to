let myInput = document.getElementById("myInput");
let addBtn = document.getElementById("addBtn");
let myUl = document.getElementById("myUl");

myInput.addEventListener("keypress", function (evt) {
    evt.stopPropagation();
    if (evt.keyCode === 13) {
        addBtn.click();
    }
});
addBtn.addEventListener("click", newTodo);
myUl.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
}, false);
function appendLi(todo) {
    let nodeLi = document.createElement("li");

    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");

    nodeLi.innerText = todo;
    span.className = "close";
    span.appendChild(text);
    nodeLi.appendChild(span);

    myUl.appendChild(nodeLi);
}
function addCloseEvent() {
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });
    }
}
function newTodo() {
    if (myInput.value && myInput.value.trim().length > 0) {
        appendLi(myInput.value);
        myInput.value = "";
        addCloseEvent();
    }
    else {
        alert("Empty todo!");
        return false;
    }
}