class Base {
  k: number = 4;
}

class Derived extends Base {
  constructor() {
    super();
    this.k = 1;
  }
}
