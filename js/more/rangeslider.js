const ranges = document.getElementsByTagName("input");
let output = document.getElementById("result");

output.value = "Result: " + ranges[0].value;
for (let i = 0; i < ranges.length; i++) {
    ranges[i].oninput = function () {
        output.innerHTML = "Result: " + ranges[i].value;
    }
}