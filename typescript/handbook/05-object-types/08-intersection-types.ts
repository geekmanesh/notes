interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Circle & Colorful;

const colorfulCircle: ColorfulCircle = {
    color: "red",
    radius: 12,
}
