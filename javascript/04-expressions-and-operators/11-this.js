function getFullName() {
    return this.firstName + " " + this.lastName;
}

const person1 = {
    firstName: "John",
    lastName: "Doe",
    getFullName: getFullName
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith",
    getFullName: getFullName
};

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith

console.log(person1);