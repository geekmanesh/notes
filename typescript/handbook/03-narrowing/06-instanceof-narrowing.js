"use strict";
function logValue(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(date.toUpperCase());
    }
}
logValue(new Date());
logValue("geekmanesh");
