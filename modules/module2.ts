const sayGoodbyeModule = (): void => {
    console.log("Goodbye from module 2")
}

// Экспорт функции из файла. Мы сожем использовать эту функцию в другом файле
export { sayGoodbyeModule }