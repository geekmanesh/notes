type Shape = "Circle" | "Square"

interface PaintOptions {
    shape: Shape,
    xPos?: number,
    yPos?: number,
}

function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;
}

function shapePainter({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    console.log(xPos);
    console.log(yPos);
}


