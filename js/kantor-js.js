"use strict";

// Строки. Шаблонные строки 
// Строка ( string ) в JavaScript должна быть заключена в кавычки.
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
// Шаблонные строки (схоже с конкатенацией строк)
// Обратные кавычки же имеют «расширенный функционал». Они позволяют нам встраивать выражения в строку, заключая их в ${...} . 

let userName = 'Julia';
console.log(`hello ${1}!`); 

// Преобразование типов
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1 т.к. 1+0=1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6 
console.log (4 + 5 + 'px'); // 9px 
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log(" -9 " + 5); // -9 5
console.log(" -9 " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN, т.к. underfined при численном преобразовании становится NaN
console.log(" \t \n" - 2); // -2

//----------- Операторы ------------

// остаток от деления %
console.log(5 % 2); // 1
console.log(69 % 7); // 6
console.log(14 % 7); // 0

// возведение в степень **
console.log(2 ** 7); // 128


//----------Инкремент и декремент---------
// Инкремент ++ увеличивает переменную на 1
let incr = 2;
incr++; // работает как incr = incr + 1, просто запись короче
console.log(incr); // 3

// Декремент -- уменьшает переменную на 1
let decr = 4;
decr--; // работает как decr = decr - 1, просто запись короче
console.log(decr); // 3

// Операторы инкремент и декремент применяются только к переменной!
// Операторы ++ и -- могут быть расположены не только после но и перед переменной 
// Когда оператор идет после переменной - это постфиксная форма
// Когда оператор идет перед переменной - это префиксная форма
// Обе эти формы увеличивают/уменьшают на 1
// Разница заключается в значении, которое они возвращают. 
// Префиксная форма возвращает новое значение.
// Постфиксная - старое (до увеличения/уменьшения)

// префиксная
let counter = 2;
let a = ++counter;
console.log(a); // 3

// постфиксная
let counter2 = 2;
let b = counter2++;
console.log(b); // 2


/* //------Взаимодействие с пользователем-------
// alert, prompt, confirm - это функции встроенные в JS которые работают только в браузере
// alert синтаксис 
// alert(message);

alert('Hello');

// prompt функция принимает два аргумента
// prompt(title, [default]);

let age = prompt("How old are you?", '');
alert(`You are ${age} year`);

//confirm синтаксис 
// result = confirm(question);

let isBoss = confirm("Are you a boss here?");
alert(isBoss); */

let uName = prompt("What is your name?", '');
let uAge = prompt("How old are you?");
let uProfession = prompt("What are you?");
alert(`Your name is ${uName}. You are ${uAge} years old. You are a ${uProfession}`);
// alert('Your name is ' + uName + '. You are ' + uAge + ' years old. You are a ' + uProfession);