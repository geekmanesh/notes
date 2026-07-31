"use strict";
function greater(fn) {
    fn("Hello World");
}
function printToConsole(s) {
    console.log(s);
}
greater(printToConsole);
