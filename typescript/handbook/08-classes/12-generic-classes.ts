class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

const box = new Box("Friend");
