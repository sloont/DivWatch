let secondCount = 0;

const displayCount = () => {
    
    let hours = Math.floor(secondCount/3600);
    let minutes = Math.floor((secondCount % 3600)/60);
    let seconds = Math.floor(secondCount % 60);

//added stuff
    let hoursOnes = hours % 10;
    let hoursTens = Math.floor(hours/10) % 10;

    let minutesOnes = minutes % 10;
    let minutesTens = Math.floor(minutes/10) % 10;

    let secondsOnes = seconds % 10;
    let secondsTens = Math.floor(seconds/10) % 10;

//we can use a universal updateDigit() function that takes two parameters the variable name and its value
    updateDigit('hoursOnes', hoursOnes);
    updateDigit('hoursTens', hoursTens);
    updateDigit('minutesOnes', minutesOnes);
    updateDigit('minutesTens', minutesTens);
    updateDigit('secondsOnes', secondsOnes);
    updateDigit('secondsTens', secondsTens);    

    secondCount++;
}

const updateDigit = (id, value) => {
    switch(value) {
        case 0:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd2")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd3")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd4")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd5")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd6")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
        case 1:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd2")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd3")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd4")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd5")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd6")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
        case 2:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd2")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd3")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd4")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd5")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd6")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd7")[0].style["z-index"] = 1;
            break;
        case 3:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd2")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd3")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd4")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd5")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd6")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
        case 4:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd2")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd3")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd4")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd5")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd6")[0].style["z-index"] = 1;          
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
        case 5:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd2")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd3")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd4")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd5")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd6")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
        case 6:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd2")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd3")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd4")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd5")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd6")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
        case 7:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd2")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd3")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd4")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd5")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd6")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
        case 8:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd2")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd3")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd4")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd5")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd6")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
        case 9:
            document.getElementById(id).getElementsByClassName("lcd1")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd2")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd3")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd4")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd5")[0].style.background = "white";
            document.getElementById(id).getElementsByClassName("lcd6")[0].style["z-index"] = 1;
            document.getElementById(id).getElementsByClassName("lcd7")[0].style.background = "white";
            break;
    }
}



/*
//number 0 should be the default case for each digit.
//we still have to be able to call it
const number0 = () => {
    //lcd1
    //lcd3
    //lcd4
    //lcd5
    //lcd6
    //lcd7
}

const number1 = () => {
    //lcd5
    //lcd7
}

const number2 = () => {
    //lcd1
    //lcd2
    //lcd3
    //lcd5
    //lcd6
}

const number3 = () => {
    //lcd1
    //lcd2
    //lcd3
    //lcd5
    //lcd7
}

const number4 = () => {
    //lcd2
    //lcd4
    //lcd5
    //lcd7
}

const number5 = () => {
    //lcd1
    //lcd2
    //lcd3
    //lcd4
    //lcd7
}

const number6 = () => {
    //lcd1
    //lcd2
    //lcd3
    //lcd4
    //lcd6
    //lcd7
}

const number7 = () => {
    //lcd1
    //lcd5
    //lcd7
}

const number8 = () => {
    //lcd1
    //lcd2
    //lcd3
    //lcd4
    //lcd5
    //lcd6
    //lcd7
}

const number9 = () => {
    //lcd1
    //lcd2
    //lcd4
    //lcd5
    //lcd7
}
*/
updateDigit('hoursTens', 7);
updateDigit('hoursOnes', 3);
updateDigit('minutesTens', 5);
updateDigit('minutesOnes', 0);
updateDigit('secondsTens', 2);
updateDigit('secondsOnes', 9);
