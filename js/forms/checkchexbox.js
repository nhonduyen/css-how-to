let text=document.getElementById("text");
let ckb=document.getElementById("myCheck");
ckb.addEventListener("change", checkCheckbox);
text.style.display="none";

function checkCheckbox() {
    if (ckb.checked){
        text.style.display="block";
    }
    else {
        text.style.display="none";
    }
}
