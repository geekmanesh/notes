interface Point {
    x: number;
    y: number;
}

function getCoord(point: Point): void {
    console.log("X is " + point.x);
    console.log("Y is " + point.y);
}

getCoord({ x: 2, y: 5 })