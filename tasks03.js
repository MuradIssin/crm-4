// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Третья задача');

// Третья задача:
// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:

// Общая сумма корзины
// Количество товаров в корзине
// Промокод

// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
// Порядок применения скидок должен соблюдаться

const totalSumma = +prompt("Общая сумма корзины");
const quantityProductBasket = +prompt("Количество товаров в корзине");
const promoCode = prompt("Промокод");

// const totalSumma = 40000;
// const quantityProductBasket = 100;
// const promoCode = "G3H2Z1";


const calculate = (total, quantity, promo) => {
  let discount = 0;
  if (quantity > 10) {
    discount += Math.round(total * 3) / 100;
    // console.log("больше 10 шт.", discount);
  }
  if (total > 30000) {
    discount += Math.round((total - 30000) * 15) / 100;
    // console.log("сумма больше 30 000====", discount);
  }
  if (promo.toLowerCase() == "METHED".toLowerCase()) {
    // console.log("METHED")
    discount += Math.round(total * 10) / 100;
  }
  if ((promo.toLowerCase() == "G3H2Z1".toLowerCase()) && (total - discount) > 2000) {
    // console.log("promo")
    discount += 500;
  }
  return discount;
}

if (Number.isFinite(totalSumma) && Number.isFinite(quantityProductBasket)) {
  console.log(`дисконт ${calculate(totalSumma, quantityProductBasket, promoCode)}`);
}

