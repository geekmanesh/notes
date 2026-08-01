"use strict";
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return 1;
        default:
            const _exhaustiveness = shape;
            return _exhaustiveness;
    }
}
