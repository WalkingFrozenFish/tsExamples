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
