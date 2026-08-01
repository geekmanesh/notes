function printAll(strs: string | string[] | null): void {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

printAll("Hello");
printAll(["hello", "world", "people"]);
printAll(null)

console.log("----");

function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}

let res = multiplyAll(undefined, 2);
console.log(res)