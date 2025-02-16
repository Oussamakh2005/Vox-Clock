const getTime = () => {
    const date = new Date();
    let hour = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hour <= 12 ? "am" : "pm";
    hour = hour % 12 || 12
    return {hour , minutes , amPm}
}

export default getTime;
