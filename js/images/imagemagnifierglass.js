
magnify("myImg", 3);
/*Specify the id of the image, and the strength of the magnifier glass:*/ 
function magnify(imgId, zoom) {
    let img = document.getElementById(imgId);
    /*create magnifier glass:*/
    let glass = document.createElement("div");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert glass:*/
    img.parentElement.insertBefore(glass, img);

    /*set background properties for the result DIV*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    glass.style.backgroundRepeat = "no-repeat";

    let bw = 3;
    let w = glass.offsetWidth / 2;
    let h = glass.offsetHeight / 2;

    /*execute a function when someone moves the cursor over the image, or the glass:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        /*prevent any other actions that may occur when moving over the image*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        let pos = getCursorPos(e);
        let x = pos.x;
        let y = pos.y;
        /*prevent the glass from being positioned outside the image:*/
        if (x > img.width - w / zoom) { x = img.width - w / zoom; }
        if (x < w / zoom) x = w / zoom;
        if (y > img.height - h / zoom) { y = img.height - h / zoom; }
        if (y < h / zoom) y = h / zoom;
        /*set the position of the glass:*/
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /*display what the glass "sees":*/
        glass.style.backgroundPosition = "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    }
    function getCursorPos(e) {

        let x = 0;
        let y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        let a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;

        return { x: x, y: y };
    }
}