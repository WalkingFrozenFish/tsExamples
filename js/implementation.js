"use strict";
// Имплементация классов и интерфейсов. Абстрактные классы
class Human {
    // constructor(name: string)
    // constructor(name: string, age: number)
    constructor(name, age) {
        this._password = "somePass";
        this.name = name;
        this._age = age !== null && age !== void 0 ? age : 22;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}, and i'm ${this._age}`);
    }
    sayGoodbye() {
        console.log(`Goodbye, password is ${"*".repeat(this._password.length)}`);
    }
}
let petya = new Human("Petya");
let vasya = new Human("Vasya", 100);
petya.sayHello();
vasya.sayHello();
petya.sayGoodbye();
vasya.sayGoodbye();
// Приватные поля нельзя создавать в интерфейсах
// Такое разделение, то есть создание абстрактного класса, позволит нам в каждом классе, который будет наследоваться от абстрактного, инициализировать методы sayHello и sayGoodbye.
// То есть мы определяем методы в абстрактном классе, позже которые мы реализуем в дочернем классе
class AHuman {
    constructor(name) {
        this.name = name;
    }
}
class FromAbstractHuman extends AHuman {
    constructor(name, age) {
        super(name);
        this._password = "Pass";
        this._age = age !== null && age !== void 0 ? age : 22;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}, and i'm ${this._age}`);
    }
    sayGoodbye() {
        console.log(`Goodbye, password is ${"*".repeat(this._password.length)}`);
    }
}
const human1 = new FromAbstractHuman("Human 1", 100);
const human2 = new FromAbstractHuman("Human 2", 4000);
human1.sayHello();
human2.sayHello();
human1.sayGoodbye();
human2.sayGoodbye();
