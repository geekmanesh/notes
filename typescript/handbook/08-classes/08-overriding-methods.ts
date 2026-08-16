class Base {
  greet(): void {
    console.log("Hello, World!");
  }
}

class Derived extends Base {
  greet(name?: string): void {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();

d.greet();
d.greet("hamid");

export {};
