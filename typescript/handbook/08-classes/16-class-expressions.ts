const someClass = class<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
};

const aClass = new someClass("HHaa");
