let modal = document.getElementById("id01");
let closeBtn = document.getElementById("closeBtn");
let btnModal = document.getElementById("btnModal");
btnModal.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openModal() {
    modal.style.display="block";
}
function closeModal() {
    modal.style.display="none";
}