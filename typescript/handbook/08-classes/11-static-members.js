class MyClass {
    static x = 10;
    static multiplyXWithTwo() {
        console.log(this.x * 2);
    }
}
console.log(MyClass.x);
MyClass.multiplyXWithTwo();
export {};
