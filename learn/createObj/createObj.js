// Rub this file:
// node .\learn\createObj\createObj.js

// Way 1
const obj1 = {
  model: "1234",
  year: 0,
};

// Way 2
// Using a constructor function
function Car(model, year) {
  this.model = model;
  this.year = year;
}

const obj2 = new Car("test", 2023);

// Way 3
// Object.create();
// because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.
const test = {
  type: "test",
  displayType() {
    console.log(this.type);
  },
};

const obj3 = Object.create(test);

obj3.displayType();
