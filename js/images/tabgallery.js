function openImg(imgs) {
    console.log(imgs.src);
    var expandedImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgText");
    expandedImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandedImg.parentElement.style.display = "block";
}