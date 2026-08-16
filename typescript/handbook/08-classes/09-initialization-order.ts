class Base {
  name = "base";
  constructor() {
    console.log("Hello I'm " + this.name);
  }
}

class Derived {
  name = "derived";
}

const d = new Derived();

export {};
