const collapses = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapses.length; i++) {
    collapses[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}