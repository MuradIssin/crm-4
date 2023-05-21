console.warn('необязательная задача - 2');

// В отдельном файле hard_task_02
// Получите от пользователя 2 числа
// Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов
// Не используйте Math.max и Math.min,
// (a + b)/2 - abs(a-b)/2

const number3 = +prompt("Введите число 1: ");
const number4 = +prompt("Введите число 2: ");

// const number3 = -5;
// const number4 = -18;

const minNumber = (num1, num2) => {
  return ((num1 + num2) / 2 - Math.abs(num1 - num2) / 2)
}

if (Number.isFinite(number3) && Number.isFinite(number4)) {
  console.log(`минимальным числом между (${number3} и ${number4}) является ${minNumber(number3, number4)}`);
};
