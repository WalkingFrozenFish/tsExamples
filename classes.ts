// В ts классах, требуется определять свойства заранее.

class Person {
    // readonly запрещает перезапись
    readonly age: number = 20
    private password: string = "Some password"
    name: string

    constructor(name: string) {
        this.name = name
    }

    sayHell(): void {
        console.log(`What the hell! My name is ${this.name} and i'm ${this.age} year`)
    }

    sayGoodbye(): void {
        console.log(`Bye, password is ${"*".repeat(this.password.length)}`)
    }
}

const people = new Person("User")
people.sayHell()
people.sayGoodbye()
// people.password // Ошибка, поле доступно только внутри класса, не вне его


// modificators
// Private - нельзя вызвать за преедлами класса
// Public - можно вызвать за пределами класса
// Protected - можно вызвать внутри класса и его потомков



