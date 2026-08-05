const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

console.log("Is 1 in fruits: " + (1 in fruits));
console.log("Is 0 in fruits: " + (0 in fruits));
console.log("Is 5 in fruits: " + (5 in fruits));
console.log("Is banana in fruits: " + ("banana" in fruits));
console.log("Is length in fruits: " + ("length" in fruits));
