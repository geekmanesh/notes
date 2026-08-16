"use strict";
class Animal {
    move() {
        console.log("moving along!");
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("Woof");
        }
    }
}
const dog = new Dog();
dog.move();
dog.woof(1);
