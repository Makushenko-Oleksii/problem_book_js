//Дан массив с числами. Найдите сумму квадратов элементов этого массива.

let arr = [2, 3, 4, 20, 60, 444];

function square(arr) {
	let res = 0;
	arr.map(item => res += item * item)
}

square(arr)

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

function square1(arr) {
	let res = 0;
	arr.map(item => res += Math.sqrt(item))
}

square1(arr)


//Дан массив с числами. Найдите сумму положительных элементов этого массива.

function sumPositiveNumber(arr) {
	let res = 0;
	arr.map(item => {
		if(item > 0) {
			res += item
		}
	})
}
sumPositiveNumber(arr)

//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.\
function sumMoreThanZero(arr) {
	let res = 0;
	arr.map(item => {
		if(item > 0 && item < 10) {
			res += item
		}
	})
	console.log(res)
}
sumMoreThanZero(arr)