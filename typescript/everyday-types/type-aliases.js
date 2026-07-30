"use strict";
function printPersonDetail(person) {
    console.log(`ID: ${person.id}, Name: ${person.name}, Is Person Dead: ${person.isDead}`);
}
printPersonDetail({ id: 1, name: "Hamid", isDead: false });
