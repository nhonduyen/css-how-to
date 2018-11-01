const btnSnack = document.getElementById("btnSnack");
btnSnack.addEventListener("click", function () {
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
});