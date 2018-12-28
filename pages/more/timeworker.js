function getTime(){
    const now = new Date();

    console.log(now.toLocaleString());
    postMessage(now.toLocaleString());
    setTimeout('getTime()', 1000);
}
getTime();