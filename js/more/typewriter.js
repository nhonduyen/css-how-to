"use strict";

const text = "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other work ascribed to Homer. The Odyssey is fundamental to the modern Western canon; it is the second-oldest extant work of Western literature, while the Iliad is the oldest. Scholars believe the Odyssey was composed near the end of the 8th century BC, somewhere in Ionia, the Greek coastal region of Anatolia.";
let i = 0;
const speed = 100; /* The speed/duration of the effect in milliseconds */

typeWriter();
function typeWriter() {
    if (i < text.length) {
        document.getElementById("writer").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}