// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Вторая задача');

// Вторая задача:
// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// Пример:  "привет Мир" => "Привет мир"

const incomeString = prompt("Введите строку c текстом: ")
// const incomeString = "привет МИР";

// const newUpString = (oldString) => {
//   let newString = oldString[0].toUpperCase() + oldString.slice(1, oldString.lenght).toLowerCase();
//   return newString;
// }

const newUpString = (oldString) => oldString[0].toUpperCase() + oldString.slice(1, oldString.lenght).toLowerCase();

console.log(newUpString(incomeString));
