const btn = document.getElementById("btnClick");
const btnreset = document.getElementById("btnReset");

btn.addEventListener("click", move);
btnreset.addEventListener("click", reset);

function move() {
    let bar = document.getElementById("myBar");
    let basicProgress = document.getElementById("basicProgress");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + "%";
            bar.innerHTML = width * 1 + "%";
            basicProgress.value = width;
        }
        console.log(width);
    }
}
function reset() {
    let bar = document.getElementById("myBar");
    let basicProgress = document.getElementById("basicProgress");

    bar.style.width = 0;
    bar.innerHTML = "";
    basicProgress.value = 0;
}