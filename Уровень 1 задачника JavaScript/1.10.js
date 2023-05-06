//Заполните массив случайными числами из промежутка от 1 до 100.

let arr = [];
for (let i = 1; i <= 100; i++) {
	arr.push(i)
}

//Выведите в консоль все его символы с конца. 12345

let num = 12345;
let res = num.toString()
for (let i = res.length -1; i >= 0; i--) {
	// console.log(res[i])
	//console.log(res.charAt(i)); //можно и так
}

//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]

let arr11 = [1, 2, 3, 4, 5, 6];
let size = 2;
let newArr = []
for (let i = 0; i < arr11.length; i += size) {
	 newArr.push(arr11.slice(i, i + size))
}
console.log(newArr)

//По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]



//Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
//Слейте эти массивы в новый массив:[1, 2, 3, 4, 5, 6]

console.log(arr1.concat(arr2));