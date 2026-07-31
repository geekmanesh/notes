function logValue(date: Date | string): void {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(date.toUpperCase())
    }
}

logValue(new Date());
logValue("geekmanesh");