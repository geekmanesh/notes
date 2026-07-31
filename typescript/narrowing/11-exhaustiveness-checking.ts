
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    sideLength: number;
}
interface Triangle {
    kind: "triangle";
    sideLength: number;
}

type Shape = Triangle | Circle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return 1;
        default:
            const _exhaustiveness: never = shape;
            return _exhaustiveness;
    }
}