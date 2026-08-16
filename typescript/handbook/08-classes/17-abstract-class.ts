abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello " + this.getName());
  }
}

class Derived extends Base {
  getName(): string {
    return "hamid";
  }
}

const derived = new Derived();

derived.printName();
