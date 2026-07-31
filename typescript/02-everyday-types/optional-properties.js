"use strict";
function printName(name) {
    if (name.last !== undefined) {
        console.log(`Fullname: ${name.first} ${name.last}`);
    }
    else {
        console.log(`Fullname: ${name.first}`);
    }
}
printName({ first: "Hamid", last: "Geekmanesh" });
printName({ first: "Zeinab" });
