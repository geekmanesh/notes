const inventory = [
    { name: "apple", type: "fruit" },
    { name: "banana", type: "fruit" },
    { name: "fist", type: "vegetable" },
    { name: "carrot", type: "vegetable" },
    { name: "fish", type: "meat" },
]

const result = Object.groupBy(inventory, ({ type }) => type);

console.log(result);