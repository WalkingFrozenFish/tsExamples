"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Мы можем импортировать определенные функции из внешних файлов
const module1_1 = require("./modules/module1");
const module2_1 = require("./modules/module2");
(0, module1_1.sayHelloModule)();
(0, module2_1.sayGoodbyeModule)();
// uselessFunc() // Данная функция не найдена, так как мы ее не экспортировали
