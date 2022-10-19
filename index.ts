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

// =================================================================

// Преобразование типов
// К примеру нам требуется получить данные с инпута
const input = document.getElementById("fname")
// console.log(input.value) 
// Будет ошибка, так как getElementById возвращает HTMLElement, у которого нет свойства value

// Здесь потребуется поменять тип переменной
// 1.
const input1 = <HTMLInputElement>document.getElementById("fname")

// 2.
const input2 = document.getElementById("fname") as HTMLInputElement

console.log(input1.value, input2.value)

// Мы преобразовали данные из одного типа в другой

// =================================================================


// Structure

const someArray: string[] = ["q", "w"] // Синтаксический сахар для записи ниже
const someArray2: Array<string> = ["w", "q"] // Дженерик

// Кортеж, массив с фиксированной длиной
const cortegeArray: [string, number] = ["q", 1]

// enum
// Удобная индексация свойств
enum CONSTANTS1 {
    key1, // 0
    key2, // 1
    key3, // 2
}

// У enum можно переназначать индексы
enum CONSTANTS2 {
    key1 = 5, // 5
    key2 = 6, // 6
    key3 = 7, // 7
}

enum CONSTANTS3 {
    key1 = "k1", // k1
    key2 = "k2", // k2
    key3 = "k3", // k3
}

enum CONSTANTS4 {
    key1 = 6, // 6
    key2, // 7
    key3, // 8
}


// Custom types
// Иногда нам требуется создать свой собственный тип данных

// Тип для описания строки или числа
// Такое обычно применяют, что бы не писать часто много типов вручную 
type numberString = number | string
const someVar: numberString = 123

// С помощю типов можно типпизировать объекты. Но с таким подходом, мы не сможем мутировать данный объект.
type TPeople = {
    name: string,
    surname: string,
    age: number,
    isMarried: boolean,
    isWorking: boolean,

    // Опициональный параметр, можно не записывать в объекте
    hasDog?: boolean
}

const somePeople1: TPeople = {
    name: "Username1",
    surname: "UserSurname1",
    age: 100,
    isMarried: false,
    isWorking: true
}

const somePeople2: TPeople = {
    name: "Username2",
    surname: "UserSurname2",
    age: 100,
    isMarried: false,
    isWorking: true,
    hasDog: true
}

// Запись специфиских объектов, где ключ будет строкой

type TSpecificObj = {
    [key: string]: string
}

const stringKeys: TSpecificObj = {
    "Key1": "Some text",
    // "Key2": 123
}



// Interfaces
// Интерфейсы умеют сливаться в один, и расширяться

// Слияние интерфейса
interface IMerge {
    key1: number
    key2: number
}

interface IMerge {
    key3: number
}

const objectMerge: IMerge = {
    key1: 1,
    key2: 2,
    key3: 3
}


// Наслдеование
interface IExt1 {
    key1: number,
    key2: number
}

interface IExt2 extends IExt1 {
    key3: number
    text: string
}

const objExt1: IExt1 = {
    key1: 1,
    key2: 2
}

const objExt2: IExt2 = {
    key1: 1,
    key2: 2,
    key3: 3,
    text: "Some text"
}

// Советуют использовать type для примитивов, а интерфейсы для объектов

// =================================================================
