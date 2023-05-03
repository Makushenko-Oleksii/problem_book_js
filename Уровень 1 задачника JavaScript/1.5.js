//Найдите сумму всех целых чисел от 1 до 100.

let sumNum = 0;
for (let i = 1; i <= 100; i++) {
	sumNum += i;
}
console.log('Сумма чисел от 1 до 100 равна: ' + sumNum)

//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

let evenSum = 0
for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		evenSum += i;
	}
}
console.log('Сумма целых четных чисел в промежутке от 1 до 100 равна: ' + evenSum)

//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let oddSum = 0
for (let i = 1; i <= 100; i++) {
	if (i % 2 !== 0) {
		oddSum += i;
	}
}
console.log('Сумма целых нечетных чисел в промежутке от 1 до 100 равна: ' + oddSum)


//Даны два целых числа. Найдите остаток от деления первого числа на второе.

let one = 3;
let two = 6;
let sum = one % two

console.log(sum)


//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

let someString = 'some string';
let res = '';
for (let i = someString.length - 1; i >= 0; i--) {
	res += someString[i];
}
console.log(res)