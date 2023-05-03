//Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль

let someNum = 13;
if(someNum >= 0) {
    console.log('positive integer');
}else {
    console.log('negative integer' );
}

//Дана строка. Выведите в консоль длину этой строки.

let someString = 'Some string';
console.log(someString.length);

//Дана строка. Выведите в консоль последний символ строки

console.log(someString[someString.length-1])

//Дано число. Проверьте, четное оно или нет.

if(someNum % 2 === 0) {
    console.log('even number');
}else {
    console.log('odd number')
}

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let worldOne = 'apple';
let worldTwo = 'amigo';

if (worldOne[0] === worldTwo[0]) {
    console.log('first letters match')
}else {
    console.log('first letters do not match')
}

//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

let lastLetter = 'карамболь';
if(lastLetter[lastLetter.length-1] === 'ь') {
    console.log('Последняя буква мякгий знак, поэтому предпоследняя буква:' + lastLetter[lastLetter.length-2])
}else {
    console.log('Последняя буква:' + lastLetter[lastLetter.length-1])
}
