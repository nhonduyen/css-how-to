
let pwd = document.getElementById("pwd");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

pwd.onfocus = function () {
    document.getElementById("message").style.display = "block";
}
pwd.onblur = function () {
    document.getElementById("message").style.display = "none";
}
pwd.addEventListener("keyup", function () {
    let lower = /[a-z]/g;
    if (pwd.value.match(lower)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else {
        letter.classList.add("invalid");
        letter.classList.remove("valid");
    }

    let upper = /[A-Z]/g;
    if (pwd.value.match(upper)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else {
        capital.classList.add("invalid");
        capital.classList.remove("valid");
    }

    let numbers = /[0-9]/g;
    if (pwd.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else {
        number.classList.add("invalid");
        number.classList.remove("valid");
    }

    if (pwd.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else {
        length.classList.add("invalid");
        length.classList.remove("valid");
    }
}
);
