let btnCopy = document.getElementById("btnCopy");

btnCopy.addEventListener("click", function () {
    const txtSource = document.getElementById("txtSource");
    txtSource.select();
    document.execCommand("copy");
    alert("Copied text: "+ txtSource.value);
});
