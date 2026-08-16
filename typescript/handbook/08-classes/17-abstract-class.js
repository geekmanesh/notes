"use strict";
class Base {
    printName() {
        console.log("Hello " + this.getName());
    }
}
class Derived extends Base {
    getName() {
        return "hamid";
    }
}
const derived = new Derived();
derived.printName();
