const video = document.getElementById("myVideo");
let btn = document.getElementById("btnPause");

btn.addEventListener("click", playPause);
function playPause() {
    if (video.paused) {
        video.play();
        btn.innerText = "Pause";
    } else {
        video.pause();
        btn.innerText = "Play";
    }
    return false;
}