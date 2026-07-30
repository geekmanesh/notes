"use strict";
function printId(id) {
    console.log(`Your ID: ${id}`);
}
printId(12);
printId("121");
printId(true);
function sayHello(passengers) {
    if (Array.isArray(passengers)) {
        console.log("Hello, " + passengers.join(" and "));
    }
    else {
        console.log("Welcome lone traveler " + passengers);
    }
}
sayHello(["Mamad", "Javad"]);
