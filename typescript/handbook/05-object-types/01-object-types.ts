// Anonymous

function great(person: { name: string, age: number }): void {
    console.log("Hello" + person.name);
}

// named object types

interface Person {
    name: string,
    age: number
}

function anotherGreet(person: Person): void {
    console.log("Hello" + person.name);
}

// type alias

type PersonType = {
    name: string,
    age: number
}

function typeGreeter(person: PersonType): void {
    console.log("Hello " + person.name);
}