                            // Инструкция IF

if (условие) {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие ПРАВДИВО) 
}

let val = 10  // объявляем переменную val

if (val > 5) {  // Если val больше 5 то
    val += 20   // Выполнить следующее действие
}
    console.log(val)  // На выходе будет 30


                            // IF ELSE

if (условие) {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие ПРАВДИВО) 
} else {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие ЛОЖНО) 
}        


let valu = 10

if (valu > 5) {
    valu = valu + 15
} else {
    valu = valu -150
}

console.log(valu)


                            // IF ELSE IF

if (условие1) {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие 1 ПРАВДИВО) 
} else if (условие2) {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие 2 ПРАВДИВО) 
} else {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие ЛОЖНО) 
}

// Удобнее написать все через if

if (условие1) {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие 1 ПРАВДИВО) 
}
if (условие2) {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие 2 ПРАВДИВО) 
}
if (условие3) {
    //(Блок кода который выплняется ОДНОКРАТНО в том случае если условие 2 ПРАВДИВО) 
}

// Пример

const age1 = 25

if (age1 > 18) {
    console.log('Eshe molodoy')
} else if (age1>= 12) {
    console.log('Malovat eshe')
} else {
    console.log('Sovsem rebenok')
}

// Теперь все только через if

const age = 25

if (age > 18) {
    console.log('Eshe molodoy')
}
if (age>= 12 && age <=18) {    // Тут надо добавить && иначе будут выполняться оба условия т.к. 25 больше 12
    console.log('Malovat eshe')
}
if (age< 12) {
    console.log('Sovsem rebenok')
} 


                            // Использован ие IF в функциях

// Если введенные параметры не являются числами то вернется сообщение "' Это не числа!!!'" и дальше функция выполняться не будет.
// Если оба параметра числа то начнется следующая проверка
const sumPozNum = (a, b) => {
    if (typeof a !== 'number'  || typeof b !== 'number') {
        return ' Это не числа!!!'
    }

// Если хотя бы один параметр меньше "0" то вернется 'Числа не положительные'
//Если все норм то переходим к следующему шагу

    if (a <= 0 || b <= 0) {
        return 'Числа не положительные'
    }


//Тут возвращается сложение двух переменных 
    return a + b
}     
sumPozNum(10, -4)

                            // SWITCH

switch (Выражение) {
    // А сравнивается срезультатом выражения из скобок. Если оно равно А то выполняются действия
    case A:
        //Действия если Выражение === А
        break // Это выход из свича
    case B:
        //Действия если Выражение === B
        break
    default:
        //Действия по умолчанию
}

const month = 2

switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')
        break
    case 2:
        console.log('Февраль')
        break
    default:
        console.log('Это не тот месяц')
}