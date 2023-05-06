//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве. let arr = [1, -2, 3, 4, -5, 6, -8];

let arr1 = [1, -2, 3, 4, -5, 6, -8];
let negativeCount = arr1.filter(item => item < 0).length;// length чтобы присвоить переменной длину массива


//Дан массив с числами. Оставьте в нем только положительные числа.
let positiveCount = arr1.filter(item => item > 0);// length чтобы присвоить переменной длину массива



//Дана строка. Удалите предпоследний символ из этой строки.

let str = 'some string';
let newStr = str.slice(0, -2) + str.slice(-1); // "some sting"


//Дана некоторая строка. Найдите позицию первого нуля в строке.

let str1 = '94302210';


//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
let arr = [1, 2, 3, 4, 5, 6];
let half = Math.floor(arr.length / 2); // находим середину массива


let firstHalfSum = arr.slice(0, half).reduce((sum, el) => sum + el, 0); // считаем сумму первой половины
let secondHalfSum = arr.slice(half).reduce((sum, el) => sum + el, 0); // считаем сумму второй половины

let result = firstHalfSum / secondHalfSum; // делим сумму первой половины на сумму второй половины

console.log(firstHalfSum); // 0.6666666666666666
