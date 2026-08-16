"use strict";
class Base {
    m = 10;
}
class Derived extends Base {
    m = 15;
}
const derived = new Derived();
console.log(derived.m);
