function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const siavash = new Person("Siavash", 12, "male");

const audi = new Car("Audi", "R8", "2020", siavash);

console.log(audi.owner.name);
