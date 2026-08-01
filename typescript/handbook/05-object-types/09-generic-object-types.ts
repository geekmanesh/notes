interface Box<Type> {
    contents: Type;
}

interface StringBox {
    contents: string;
}

let boxA: Box<string> = { contents: "Hello" };
boxA.contents;

let boxB: StringBox = { contents = "mello" };
boxB.contents;


interface Apple {
    color: "red" | "green" | "white",
    weight: number;
}

type AppleBox = Box<Apple>;