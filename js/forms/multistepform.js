let currentTab = 0;
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
prevBtn.addEventListener("click", function () { nextPrev(-1); }, false);
nextBtn.addEventListener("click", function () { nextPrev(1); }, false);
showTab(currentTab);

function showTab(n) {
    let tab = document.getElementsByClassName("tab");
    tab[n].style.display = "block";
    if (n == 0) {
        prevBtn.style.display = "none";
    }
    else {
        prevBtn.style.display = "inline";
    }
    if (n == tab.length - 1) {
        nextBtn.innerHTML = "Submit";
    }
    else {
        nextBtn.innerHTML = "Next";
    }
    fixStepIndicator(n);
}
function nextPrev(n) {
    let tabs = document.getElementsByClassName("tab");
    if (n == 0 || !validateForm())
        return false;
    tabs[currentTab].style.display = "none";
    currentTab += n;
    if (currentTab == tabs.length - 1) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}
function fixStepIndicator(n) {
    let step = document.getElementsByClassName("step");
    for (let i = 0; i < step.length; i++) {
        step[i].className = step[i].className.replace("active", "");
    }
    step[n].className += " active";
}
function validateForm() {
    let valid = true;
    let tabs = document.getElementsByClassName("tab");
    let inputs = tabs[currentTab].getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            valid = false;
            inputs[i].className += " invalid";
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}