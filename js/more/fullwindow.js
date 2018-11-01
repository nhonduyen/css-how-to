let btnFullVideo = document.getElementById("btnFullVideo");
btnFullVideo.addEventListener("click", openFullScreen);

function openFullScreen() {
    let video = document.getElementById("myVideo");
    console.log(video);
    if (video.requestFullscreen) {
        console.log(1);
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {  /* Firefox */
        console.log(2);
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullScreen) { /* Chrome, Safari & Opera */
        console.log(3);
        video.webkitRequestFullScreen();
    } else if (video.msRequestFullScreen) {  /* IE/Edge */
        console.log(4);
        video.msRequestFullScreen();
    }
}