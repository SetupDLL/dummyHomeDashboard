class GlucoseEntry {

    constructor(date, glucose) {
        this.date = transformDate(date);
        this.glucose = glucose;
    }
}

function transformDate(date) {
    let time = new Date(date + '.000+00:00');
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return new Date(1970, 1, 1, hours, minutes, seconds).getTime();
}
