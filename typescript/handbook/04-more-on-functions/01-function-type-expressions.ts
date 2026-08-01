type GreaterFunction = (a: string) => void;

function greater(fn: GreaterFunction) {
    fn("Hello World");
}

function printToConsole(s: string): void {
    console.log(s);
}

greater(printToConsole)
