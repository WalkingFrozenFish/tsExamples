const sayHelloModule = (): void => {
    console.log("Hello from module 1")
}

const uselessFunc = (): void => { }

// Экспорт функции из файла. Мы сожем использовать эту функцию в другом файле
export { sayHelloModule }