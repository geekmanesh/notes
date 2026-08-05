// concat

let myArray = ["1", "2", "3"];
myArray.concat("a", "b", "c");
console.log(myArray);

myArray = myArray.concat("a", "b", "c");
console.log(myArray);


// join

const myArray2 = ["1", "2", "3"];
console.log(myArray2.join());
console.log(myArray2.join(""));
console.log(myArray2.join("-"));


// push

let myArray3 = ["1", "2", "3"];

myArray3.push("4");
console.log(myArray3);

myArray3.push("5", "6");
console.log(myArray3);

// pop

let myArray4 = ["1", "2", "3"];

const poppedValue = myArray4.pop();
console.log(poppedValue);
console.log(myArray4);


// shift

let myArray5 = ["1", "2", "3"];

const shiftedValue = myArray5.shift();
console.log(shiftedValue);
console.log(myArray5);

// unshift

let myArray6 = ["1", "2", "3"];

myArray6.unshift("-1", "0");
console.log(myArray6);

// slice

const myArray7 = ["1", "2", "3", "4", "5"];

const slicedArray = myArray7.slice(1, 4);
console.log(slicedArray);
console.log(myArray7);

// at

const myArray8 = ["1", "2", "3", "4", "5"];
console.log(myArray8.at(0));
console.log(myArray8.at(-1));


// splice

let myArray9 = ["1", "2", "3", "4", "5"];

const splicedArray = myArray9.splice(1, 2, "a", "b");
console.log(splicedArray);
console.log(myArray9);


// map

const myArray10 = ["1", "2", "3", "4", "5"];
const mappedArray = myArray10.map((value) => {
    return value + "!";
});
console.log(mappedArray);
console.log(myArray10);