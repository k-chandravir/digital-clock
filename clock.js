setInterval(displayTime,1000);

function displayTime(){

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    am_pm = "AM";

    if(hours > 12){
        am_pm = "PM";
        hours = hours - 12;
    }
    if(hours == 12){
        am_pm = "AM";
        hours = 0;
    }


    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeToDisplay = hours + ":" + minutes + ":" + seconds + am_pm;

    document.getElementById("clock").innerText = timeToDisplay;
}

displayTime();