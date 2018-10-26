
let ckb = document.getElementById("mycheck");
ckb.addEventListener("change", showPassword);

function showPassword() {
    let pwd = document.getElementById("myPassword");
    if (ckb.checked) {
        pwd.type = "text";
    }
    else {
        pwd.type = "password";
    }
}
