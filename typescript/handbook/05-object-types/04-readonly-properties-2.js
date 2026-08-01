"use strict";
let writablePerson = {
    name: "Person Name",
    age: 42,
};
let readonlyPerson = writablePerson;
readonlyPerson.age;
writablePerson.age++;
