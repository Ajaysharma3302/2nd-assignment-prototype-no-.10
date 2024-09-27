function Person(name, age) {
  (this.name = name), (this.age = age);
}
Person.prototype.introduce = function () {
  console.log(`${this.name} is working as a ${this.jobtitle}`);
};

function Employee(name, age, jobtitle) {
  Person.call(this, name, age);
  this.jobtitle = jobtitle;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobtitle}`);
};

let p1 = new Person("ajay", 25);
let e1 = new Employee("ravi", 5, "enginner");
p1.introduce();
e1.introduce();
e1.work();
