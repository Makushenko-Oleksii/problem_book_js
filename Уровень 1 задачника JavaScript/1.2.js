//Дано число. Выведите в консоль первую цифру этого числа.
let someNumber = 1234567;
//проблема в том, что можно обращаться к символам строки, но нельзя - к цифрам числа, поэтому:
let str = String(someNumber);
console.log(str[0]);


//Дано число. Выведите в консоль последнюю цифру этого числа
console.log(str[str.length-1]);

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
let firstNumber = Number(str[0]);
let secondNumber = Number(str[str.length-1]);
console.log(firstNumber + secondNumber)

//Дано число. Выведите количество цифр в этом числе.
console.log(str.length)

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let a = 134;
let b = 190;
if(String(a)[0] === String(b)[0]){
    console.log('первые цифры чисел совпадают')
}else {
    console.log('первые цифры чисел не совпадают')
}