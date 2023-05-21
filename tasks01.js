'use strict';
const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Первая задача');

// Первая задача:
// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 73 рубля.

const priceInEuro = +prompt("Введите стоимость в Евро: ")
// const priceInEuro = +"450";

const usd = 73;
const euro = usd * 1.2;

const calcCurrencyEuroToRub = (fromEuro) => {
  return Math.round(fromEuro * euro * 100) / 100;
}

if (Number.isFinite(priceInEuro)) {
  console.log(calcCurrencyEuroToRub(priceInEuro));
} else {
  console.log(`введенное ${priceInEuro} не является числом`)
} 
