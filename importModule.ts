// Мы можем импортировать определенные функции из внешних файлов
import { sayHelloModule } from "./modules/module1";
import { sayGoodbyeModule } from "./modules/module2";

sayHelloModule()
sayGoodbyeModule()
// uselessFunc() // Данная функция не найдена, так как мы ее не экспортировали