// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function runTimer() {
    let timer = document.getElementById("remainingTime");
    let remTime = timer.innerHTML.split(":");
    let remMinutes = parseInt(remTime[0]);
    let remSeconds = parseInt(remTime[1]);
    let totalSeconds = remMinutes * 60 + remSeconds;
    if (totalSeconds > 0) {
        totalSeconds -= 1;
        remMinutes = Math.floor(totalSeconds / 60);
        remSeconds = totalSeconds % 60;
        timer.innerHTML = `${remMinutes}:${remSeconds}`;
        setTimeout(runTimer, 1000);
    }
}