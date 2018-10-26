let text=document.getElementById("text");
let ckb=document.getElementById("myCheck");
text.style.display="none";

ckb.addEventListener("keyup", function(event) {
    if (event.getModifierState("CapsLock")){
        text.style.display="block";
    }
    else {
        text.style.display="none";
    }
}
);