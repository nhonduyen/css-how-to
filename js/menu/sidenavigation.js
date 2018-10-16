document.addEventListener("DOMContentLoaded", function () {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    function openNavFull() {
        const lstA = document.getElementsByTagName("a");
        for (let i = 0; i < lstA.length; i++) {
            lstA[i].style.textAlign = "center";
        }
        document.getElementById("mySidenav").style.width = "100%";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        const lstA = document.getElementsByTagName("a");
        for (let i = 0; i < lstA.length; i++) {
            lstA[i].style.textAlign = "left";
        }
    }
 
const button1 = document.getElementById("btnSidenav");
const buttonFull = document.getElementById("btnSidenavFull");
const closebtn = document.getElementsByClassName("closebtn")[0];
button1.addEventListener("click", openNav);
buttonFull.addEventListener("click", openNavFull);
closebtn.addEventListener("click", closeNav);
});