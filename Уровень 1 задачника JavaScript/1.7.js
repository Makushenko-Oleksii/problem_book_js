//Получите массив букв этой строки.

let str = 'abcde';
str.split('');


//Получите массив цифр этого числа.

let num = 12345;
let str1 = String(num).split('').map(Number) //map(Number) - шикарный способ преобразовать массив строк в массив цифр, когда массив строк цифры


//Переверните его: let num = 12345;

str1.reverse()


//Найдите сумму цифр этого числа. let num = 12345;

let res = 0;
console.log(str1)

for (let i = 0; i < str1.length ; i++) {
   res += str1[i]
}
console.log(res)