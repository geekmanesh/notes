"use strict";
function doSomething(fn) {
    console.log(`${fn.description} returnd ${fn(6)}`);
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething(myFunc);
