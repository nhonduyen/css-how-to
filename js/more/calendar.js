const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let today = new Date();
let listDays = document.getElementById("days");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let countNextPrev = 0;

loadDate(today);
prev.addEventListener("click", function () { nextPrev(-1); }, false);
next.addEventListener("click", function () { nextPrev(1); }, false);

function loadDate(today) {
    let now = new Date();
    let month = today.getMonth();
    let currMonth = monthNames[today.getMonth()];
    let year = today.getFullYear();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstWeekDay = new Date(year, month, 1).getDay();
    console.log(`first day of first week: ${firstWeekDay}  date ${today.toISOString()}`);
    let labelMonth = document.getElementById("currMonth");

    listDays.innerHTML = "";
    labelMonth.innerHTML = `${currMonth}<br><span style="font-size:18px>">${year}</span>`;

    let d = 1;
    let tempDay = 1;
    while (daysInMonth + firstWeekDay >= d) {
        let day = new Date(year, month, d).getDay();
        if (now.getDate() == parseInt(d)) {
            listDays.innerHTML += `<li><span class="active">${tempDay++}</span></li>`;
        } else if (firstWeekDay < d) {
            listDays.innerHTML += `<li>${tempDay++}</li>`;
        }
        else {
            listDays.innerHTML += `<li></li>`;
        }
        d++;
    }

}

listDays.addEventListener("click", function (event) {
    let li = listDays.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        if (li[i].getElementsByTagName("span").length > 0) {
            let text = li[i].firstChild.innerText;
            li[i].removeChild(li[i].childNodes[0]);
            li[i].innerText = text;
            break;
        }
    }
    if (event.target.tagName.toLowerCase() === "li") {
        event.target.innerHTML = `<li><span class="active">${event.target.innerText}</span></li>`
    }

});
function nextPrev(nexrPrevMonth) {
    if (nexrPrevMonth > 0)
        countNextPrev++;
    else
        countNextPrev--;
    let now = new Date(today.getFullYear(), (today.getMonth() + countNextPrev), 1);

    console.log([countNextPrev, nexrPrevMonth, now.toISOString()]);
    loadDate(now);
}