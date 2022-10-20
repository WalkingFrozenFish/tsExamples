"use strict";
// В ts классах, требуется определять свойства заранее.
class Person {
    constructor(name) {
        // readonly запрещает перезапись
        this.age = 20;
        this.password = "Some password";
        this.name = name;
    }
    sayHell() {
        console.log(`What the hell! My name is ${this.name} and i'm ${this.age} year`);
    }
    sayGoodbye() {
        console.log(`Bye, password is ${"*".repeat(this.password.length)}`);
    }
}
const people = new Person("User");
people.sayHell();
people.sayGoodbye();
// people.password // Ошибка, поле доступно только внутри класса, не вне его
// modificators
// Private - нельзя вызвать за преедлами класса
// Public - можно вызвать за пределами класса
// Protected - можно вызвать внутри класса и его потомков
