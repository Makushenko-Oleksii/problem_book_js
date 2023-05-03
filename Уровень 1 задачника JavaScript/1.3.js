//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let someString = 'some string';
console.log(someString.length)
if (someString.length > 1) {
    console.log(someString[someString.length - 2])
} else {
    console.log('длина строки один символ')
}

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let numberOne = 4;
let numberTwo = 2;

if(numberOne % numberTwo === 0) {
    console.log('первое число без остатка делится на второе')
} else {
    console.log('первое число без остатка НЕ делится на второе')
}