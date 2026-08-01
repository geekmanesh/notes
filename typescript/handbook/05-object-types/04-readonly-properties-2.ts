interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person Name",
    age: 42,
}

let readonlyPerson: ReadonlyPerson = writablePerson
readonlyPerson.age;
writablePerson.age++