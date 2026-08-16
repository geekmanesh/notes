"use strict";
class MyClass {
    name = "MyClass";
    getName() {
        return this.name;
    }
}
const myclass = new MyClass();
const obj = {
    name: "obj",
    getName: myclass.getName,
};
console.log(obj.getName());
