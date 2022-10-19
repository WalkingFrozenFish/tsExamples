// Types

const typeVariable1: string = "Some text"
const typeVariable2: number = 42
const typeVariable3: boolean = true

// TS умеет автоматически определять тип значения в переменной, если явно не указать тип

let typeVariable4 = "Some text 2"
// typeVariable4 = 42 // Ошибка, тип переменной string


// Объединение типов - union type (|)
let variable1: string | number
const variable2: string | number = "Text"
const variabel3: boolean | number = true

// Если не определить значение сразу, TS не позволит вызывать методы для ланной переменной. Так как он не знает какой тип данных есть в переменной
// variable1.toFixed()
// variable1.toLowerCase()


// В TS существуют встроенные типы. К пример тип даты и времени
// Объявление даты
const time1: Date = new Date()

// TS может неявно преобразовать данные. Можно обойтись без записи типа данных для переменной
const time2 = new Date()

// =================================================================


// Functions

function sumFunc(arg1: number, arg2: number): number {
    return arg1 + arg2
}

const repeatName = (name: string, countRepeat: number): string => {
    return name.repeat(countRepeat)
}


// Void - пустота

const justFunc = () => { }
const voidFunc = (): void => { }

console.log(justFunc() == undefined, voidFunc() == undefined)


// Unknown - используется для проверки на существование
let unknownVariable: unknown
unknownVariable = 10
console.log(unknownVariable == undefined)


// object - дать непримитивный тип данных переменной, не путать с Object

// Примитивные типы
// string
// number
// boolean
// symbol
// null

const isObj1 = 1
const isObj2 = [1]
console.log("Typeof variable, isObj", typeof isObj1 == "object", typeof isObj2 == "object")