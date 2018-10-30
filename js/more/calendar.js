const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let today = new Date();
let month = today.getMonth();
let currMonth = monthNames[today.getUTCMonth()];
let year = today.getFullYear();
let daysInMonth = new Date(year, month + 1, 0).getDate();
const firstWeekDay = today.getDay();
console.log(firstWeekDay);

let labelMonth = document.getElementById("currMonth");
let listDays = document.getElementById("days");


labelMonth.innerHTML = `${currMonth}<br><span style="font-size:18px>">${year}</span>`;


for (let i = 1; i <= daysInMonth; i++) {
    let day = new Date(year, month, i).getDay();
    if (i < 10) i = "0" + i;
    if (today.getDate() == parseInt(i)) {
        listDays.innerHTML += `<li><span class="active">${i}</span></li>`;
    } else {
        listDays.innerHTML += `<li>${i}</li>`;
    }

}
listDays.addEventListener("click", function (event) {
    let li = listDays.getElementsByClassName("li");
    if (event.target.tagName.toLowerCase() === "li") {
        for (let i = 0; i < li.length; i++) {
            console.log(i);
            li[i].innerHTML == `<li>${li[i].innerText}</li>`;
        }
        event.target.innerHTML = `<li><span class="active">${event.target.innerText}</span></li>`
    }

});
