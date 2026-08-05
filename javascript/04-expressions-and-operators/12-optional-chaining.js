const person1 = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
}

const person2 = {
    firstName: "Jane",
    lastName: "Smith"
}


console.log(person1.address?.street);
console.log(person2.address?.street);