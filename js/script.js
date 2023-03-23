"use strict"; /* ИСПОЛЬЗОВАТЬ СТРОГИЙ РЕЖИМ когда такая строка прописана, мы говорим скриптовому файлу, что работаем в современном строгом режиме*/

let number = 5;
const leftBorder = 1;

number = 10;
console.log(number);

/* const obj = {
	a: 50
};
obj.a = 10;
console. log(obj); */

const arr = [1, 2, 3]; //массив - перечень информации по порядку,
//у каждой сущности есть определенный номер по порядку (начинаем с 0). порядок играет важную роль, мы используя порядковый номер можем обращаться к этим сущностям
const obj = {a: 1, b: 2}; //объект 
console.log(arr[2]);


// Условия 
if (4 == 4) {
	console.log('Ok!');
} else {
	console.log('error');
}


// if (num < 49) {
// 	console.log('error');
// } else if (num > 100) {
// 	console.log ('много');
// } else {
// 	console.log('ок');
// }

const num = 50;
switch (num) {
	case 49: 
		console.log('no');
		break;
	case 100: 
		console.log('no');
		break;
	case 70: 
		console.log('Yes');
		break;
	default:
		console.log('does not work');
		break;
}