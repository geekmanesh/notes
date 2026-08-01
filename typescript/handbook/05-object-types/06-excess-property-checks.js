"use strict";
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20
    };
}
let mySquare = createSquare({ colour: "red", width: 2 });
