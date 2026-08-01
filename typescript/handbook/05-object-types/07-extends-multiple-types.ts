interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Circle, Colorful { }

const colorfulCircle: ColorfulCircle = {
    color: "red",
    radius: 12,
}
