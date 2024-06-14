console.log("main.js werkt");

//variables and querySelector
const dateInput = document.querySelector(".date");
const timeInput = document.querySelector(".time");
const titleInput = document.querySelector(".title");
const lngInput = document.querySelector(".language");
const tmzInput = document.querySelector(".timezone");
const titleChange = document.querySelector(".title-2");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const button = document.querySelector(".countdown");
const text = document.querySelectorAll(".text")

//button countdown
button.addEventListener("click", function(){
    // change date
    
    // change time

    // change title
    titleChange.innerHTML = `
    <div>${titleInput.value}</div>`

    // change language

    // change timezone
    
});

//Countdown code

// function startTimer () {
    
// }

// let t = setInterval(function (timeLeft) {
//     let timeOver = deadline - now;
//     // day
//     day = timeLeft / (timeLeft/1000*60*60*24);
//     day.textContent = Math.floor(day);
//     timeLeft %= (1000*60*60*24);
//     // hour
//     hour = timeLeft / ((timeLeft%(1000*60*60*24))/(1000*60*60));
//     hour.textContent = Math.floor(hour);
//     timeLeft %= ((timeLeft%(1000*60*60*24))/(1000*60*60));
//     // minutes
//     min = timeLeft (timeLeft % (1000 * 60 * 60)) / (1000 * 60);
//     min.textContent = Math.floor(min);
//     timeLeft %= (timeLeft % (1000 * 60 * 60)) / (1000 * 60);
//     // seconds
//     sec = timeLeft / (timeLeft % (1000 * 60)) / 1000;
//     sec.textContent = Math.floor(sec);

// document.getElementById("day").innerHTML = day;
// document.getElementById("hour").innerHTML = hour;
// document.getElementById("minutes").innerHTML = min;
// document.getElementById("seconds").innerHTML = sec;

// if (timeLeft < 0) {
//     clearInterval(timeOver);
//     document.getElementById("text").innerHTML = "THE EVENT IS HERE!"
//     document.getElementById("day").innerHTML = 0;
//     document.getElementById("hour").innerHTML = 0;
//     document.getElementById("minutes").innerHTML = 0;
//     document.getElementById("seconds").innerHTML = 0;
// }
// }, 1000);

// function timer(timeLeft) {
//     //day
//     const dayTime = timeLeft / (3600000 * 24);
//     day.textContent = Math.floor(day);
//     timeLeft %= (3600000 * 24);
//     //hour
//     const hourTime = timeLeft / 3600000;
//     hour.textContent = Math.floor(hour);
//     timeLeft %= 3600000;
//     //minutes
//     const minTime = timeLeft / 60000;
//     min.textContent = Math.floor(min);
//     timeLeft %= 60000;
//     //seconds
//     const secTime = timeLeft / 1000;
//     sec.textContent = Math.floor(sec);
// }

