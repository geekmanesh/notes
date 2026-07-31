"use strict";
function toUpperOrPrintOut(x, y) {
    if (x === y) {
        console.log(x.toUpperCase);
        console.log(y.toUpperCase);
    }
    else {
        console.log(x);
        console.log(y);
    }
}
toUpperOrPrintOut(1, "Mother");
toUpperOrPrintOut("hola", "Father");
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
multiplyValue({ value: 5 }, 2);
multiplyValue({ value: null }, 2);
