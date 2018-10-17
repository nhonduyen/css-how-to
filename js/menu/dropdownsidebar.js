let dropdown = document.getElementsByClassName("dropdown-btn");
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        dropdown[i].classList.toggle("active");
        let dropdownContent = dropdown[i].nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
        else {
            dropdownContent.style.display = "block";
        }
    });
}
