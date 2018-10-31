const btnOverlay=document.getElementById("btnOverlay");
const overlay=document.getElementById("overlay");

btnOverlay.addEventListener("click", function(){
    overlay.style.display="block";
});
overlay.addEventListener("click", function(){
    overlay.style.display="none";
});