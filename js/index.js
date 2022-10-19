"use strict";
// Types
const typeVariable1 = "Some text";
const typeVariable2 = 42;
const typeVariable3 = true;
// TS умеет автоматически определять тип значения в переменной, если явно не указать тип
let typeVariable4 = "Some text 2";
// typeVariable4 = 42 // Ошибка, тип переменной string
// Объединение типов - union type (|)
let variable1;
const variable2 = "Text";
const variabel3 = true;
// Если не определить значение сразу, TS не позволит вызывать методы для ланной переменной. Так как он не знает какой тип данных есть в переменной
// variable1.toFixed()
// variable1.toLowerCase()
// В TS существуют встроенные типы. К пример тип даты и времени
// Объявление даты
const time1 = new Date();
// TS может неявно преобразовать данные. Можно обойтись без записи типа данных для переменной
const time2 = new Date();
// =================================================================
// Functions
function sumFunc(arg1, arg2) {
    return arg1 + arg2;
}
const repeatName = (name, countRepeat) => {
    return name.repeat(countRepeat);
};
// Void - пустота
const justFunc = () => { };
const voidFunc = () => { };
console.log(justFunc() == undefined, voidFunc() == undefined);
// Unknown - используется для проверки на существование
let unknownVariable;
unknownVariable = 10;
console.log(unknownVariable == undefined);
// object - дать непримитивный тип данных переменной, не путать с Object
// Примитивные типы
// string
// number
// boolean
// symbol
// null
const isObj1 = 1;
const isObj2 = [1];
console.log("Typeof variable, isObj", typeof isObj1 == "object", typeof isObj2 == "object");
// =================================================================
// Преобразование типов
// К примеру нам требуется получить данные с инпута
const input = document.getElementById("fname");
// console.log(input.value) 
// Будет ошибка, так как getElementById возвращает HTMLElement, у которого нет свойства value
// Здесь потребуется поменять тип переменной
// 1.
const input1 = document.getElementById("fname");
// 2.
const input2 = document.getElementById("fname");
console.log(input1.value, input2.value);
// Мы преобразовали данные из одного типа в другой
// =================================================================
// Structure
const someArray = ["q", "w"]; // Синтаксический сахар для записи ниже
const someArray2 = ["w", "q"]; // Дженерик
// Кортеж, массив с фиксированной длиной
const cortegeArray = ["q", 1];
// enum
// Удобная индексация свойств
var CONSTANTS1;
(function (CONSTANTS1) {
    CONSTANTS1[CONSTANTS1["key1"] = 0] = "key1";
    CONSTANTS1[CONSTANTS1["key2"] = 1] = "key2";
    CONSTANTS1[CONSTANTS1["key3"] = 2] = "key3";
})(CONSTANTS1 || (CONSTANTS1 = {}));
// У enum можно переназначать индексы
var CONSTANTS2;
(function (CONSTANTS2) {
    CONSTANTS2[CONSTANTS2["key1"] = 5] = "key1";
    CONSTANTS2[CONSTANTS2["key2"] = 6] = "key2";
    CONSTANTS2[CONSTANTS2["key3"] = 7] = "key3";
})(CONSTANTS2 || (CONSTANTS2 = {}));
var CONSTANTS3;
(function (CONSTANTS3) {
    CONSTANTS3["key1"] = "k1";
    CONSTANTS3["key2"] = "k2";
    CONSTANTS3["key3"] = "k3";
})(CONSTANTS3 || (CONSTANTS3 = {}));
var CONSTANTS4;
(function (CONSTANTS4) {
    CONSTANTS4[CONSTANTS4["key1"] = 6] = "key1";
    CONSTANTS4[CONSTANTS4["key2"] = 7] = "key2";
    CONSTANTS4[CONSTANTS4["key3"] = 8] = "key3";
})(CONSTANTS4 || (CONSTANTS4 = {}));
const someVar = 123;
const somePeople1 = {
    name: "Username1",
    surname: "UserSurname1",
    age: 100,
    isMarried: false,
    isWorking: true
};
const somePeople2 = {
    name: "Username2",
    surname: "UserSurname2",
    age: 100,
    isMarried: false,
    isWorking: true,
    hasDog: true
};
const stringKeys = {
    "Key1": "Some text",
    // "Key2": 123
};
const objectMerge = {
    key1: 1,
    key2: 2,
    key3: 3
};
const objExt1 = {
    key1: 1,
    key2: 2
};
const objExt2 = {
    key1: 1,
    key2: 2,
    key3: 3,
    text: "Some text"
};
// Советуют использовать type для примитивов, а интерфейсы для объектов
// =================================================================
