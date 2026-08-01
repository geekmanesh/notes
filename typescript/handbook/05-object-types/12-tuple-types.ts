type StringNumberPair = [string, number]

function doSomething(pair: StringNumberPair): void {
    const a = pair[0]

    const b = pair[1]
}


doSomething(["Hello", 83]);



type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ["Hamid", "Zeinab", true, false, true, false, false, true];
const b: StringBooleansNumber = ["Hamid", true, false, true, 1383];
const c: BooleansStringNumber = [true, false, true, "Hamid", 2005];