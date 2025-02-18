import data from "./data.js";

const createMessage = (time) => {
    let message = "";
    const morningNoon = (time.amPm == "am")? "in the morning" : "in the evening"
    switch(time.minutes){
        case 0 : 
        message = `Its ${data[time.hour]} o'clock`;
        break;
        case 15 : 
        message = `Its a quarter past ${data[time.hour]}`;
        break;
        case 30 : 
        message = `Its a half past ${data[time.hour]}`;
        break;
        default :
        message = `The current time is ${data[time.hour]} ${data[time.minutes]}`;
        break;
    }
    return message+` ${morningNoon}`
}

export default createMessage;