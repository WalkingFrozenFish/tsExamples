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