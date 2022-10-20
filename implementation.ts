// Имплементация классов и интерфейсов. Абстрактные классы

interface Creature {
    name: string
    sayHello(): void
    sayGoodbye(): void
}

class Human implements Creature {
    name: string
    private _password: string = "somePass"
    private _age: number

    // constructor(name: string)
    // constructor(name: string, age: number)

    constructor(name: string, age?: number) {
        this.name = name
        this._age = age ?? 22
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name}, and i'm ${this._age}`)
    }

    sayGoodbye(): void {
        console.log(`Goodbye, password is ${"*".repeat(this._password.length)}`)
    }
}

let petya = new Human("Petya")
let vasya = new Human("Vasya", 100)

petya.sayHello()
vasya.sayHello()

petya.sayGoodbye()
vasya.sayGoodbye()


// Приватные поля нельзя создавать в интерфейсах



// Такое разделение, то есть создание абстрактного класса, позволит нам в каждом классе, который будет наследоваться от абстрактного, инициализировать методы sayHello и sayGoodbye.

// То есть мы определяем методы в абстрактном классе, позже которые мы реализуем в дочернем классе
abstract class AHuman {
    name: string
    constructor(name: string) {
        this.name = name
    }

    abstract sayHello(): void
    abstract sayGoodbye(): void
}


class FromAbstractHuman extends AHuman {
    private _age: number
    private _password: string = "Pass"

    constructor(name: string, age: number) {
        super(name)
        this._age = age ?? 22
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name}, and i'm ${this._age}`)
    }

    sayGoodbye(): void {
        console.log(`Goodbye, password is ${"*".repeat(this._password.length)}`)
    }
}

const human1 = new FromAbstractHuman("Human 1", 100)
const human2 = new FromAbstractHuman("Human 2", 4000)

human1.sayHello()
human2.sayHello()

human1.sayGoodbye()
human2.sayGoodbye()