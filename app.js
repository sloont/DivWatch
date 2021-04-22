// cool document header

let stopWatch;
let secondCount = 0;

const displayParagraph = document.getElementById('stopwatch-text');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

const DigitToLcdMap = {
    0: 0b1111101,
    1: 0b1010000,
    2: 0b0110111,
    3: 0b1010111,
    4: 0b1011010,
    5: 0b1001111,
    6: 0b1101111,
    7: 0b1010001,
    8: 0b1111111,
    9: 0b1011111
};

const updateDigit = (parentId, num) => {
    let parentElement = document.getElementById(parentId);
    const lcdBin = DigitToLcdMap[num];

    for (let i = 0; i < 7; i++) {
        const mask = 0b1 << i;
        if (lcdBin & mask) {
            parentElement.getElementsByClassName("lcd-bar")[i].style["background"] = "#edf0f1"; //change to "lcd" with actual index
            parentElement.getElementsByClassName("lcd-bar")[i].style["z-index"] = 2;
        } else {
            parentElement.getElementsByClassName("lcd-bar")[i].style["background"] = "#24252a";
            parentElement.getElementsByClassName("lcd-bar")[i].style["z-index"] = 1;
        }
    }
}


const displayCount = () => {

    const hours = Math.floor(secondCount / 3600);
    const minutes = Math.floor((secondCount % 3600) / 60);
    const seconds = Math.floor(secondCount % 60);

    const hoursOnes = hours % 10;
    const hoursTens = Math.floor(hours / 10) % 10;
    const minutesOnes = minutes % 10;
    const minutesTens = Math.floor(minutes / 10) % 10;
    const secondsOnes = seconds % 10;
    const secondsTens = Math.floor(seconds / 10) % 10;

    updateDigit('hoursOnes', hoursOnes);
    updateDigit('hoursTens', hoursTens);
    updateDigit('minutesOnes', minutesOnes);
    updateDigit('minutesTens', minutesTens);
    updateDigit('secondsOnes', secondsOnes);
    updateDigit('secondsTens', secondsTens);

    /*
    // update paragraph text
    //specifically for the text "testclock"
    const displayHours = (hours < 10) ? '0' + hours : hours;
    const displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    const displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
    displayParagraph.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;
    */
}



startBtn.addEventListener('click', () => {
    console.log("start button clicked");

    displayCount();
    stopWatch = setInterval(() => displayCount(secondCount++), 1000);

    startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
    console.log("stop button clicked");

    clearInterval(stopWatch);

    startBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
    console.log("reset button clicked");

    clearInterval(stopWatch);
    secondCount = 0;
    displayCount(secondCount);

    startBtn.disabled = false;
});

/*
updateDigit("hoursTens", 8);
updateDigit("hoursOnes", 6);
updateDigit("minutesTens", 1);
updateDigit("minutesOnes", 9);
updateDigit("secondsTens", 4);
updateDigit("secondsOnes", 3);
*/