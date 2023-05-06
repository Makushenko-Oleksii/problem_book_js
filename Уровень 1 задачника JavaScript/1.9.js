//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let str = ['http://google.com', "http://yhoo.com", "yhoo.com.html", "google.com.html"];

let filteredHttp = str.filter(item => item.startsWith('http://'));
console.log(filteredHttp)


//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

let filteredHtml = str.filter(item => item.endsWith('html'));
console.log(filteredHtml)

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let arr = [1, 2, 3, 4, 5]

let res = arr.map(item => {
	return item * 1.1
})

console.log(res)