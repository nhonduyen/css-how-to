let output = document.getElementById("result");
let worker;

function startWorker() {
    console.log('start worker');
    if (typeof (Worker) != 'undefined') {
        if (typeof (worker) == 'undefined') {
            console.log('register worker');
            worker = new Worker('timeworker.js');
            console.log(worker);
        }
        worker.onmessage = (event) => {
            output.innerHTML = event.data;
        }
    } else {
        output.innerHTML = 'Sorry, your browser does not support web worker.';
    }
}

function stopWorker() {
    console.log('End worker');
    worker.terminate();
    worker = undefined;
}

document.getElementById("btnstart").addEventListener('click', startWorker);
document.getElementById("btnend").addEventListener('click', stopWorker);