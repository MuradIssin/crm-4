console.warn('необязательная задача - 1');

// Первая задача
// В отдельном файле hard_task_01
// Напишите функцию, вычисляющую наибольший общий делитель двух чисел

const number1 = 18;
const number2 = 16;

const nod = (num1, num2) => {
  let numMax = num1;
  let numMin = num2;
  if (numMax < numMin) {
    // numMax = num2;
    // numMin = num1;
    [num2] = [num1]
  }
  if (numMax % numMin === 0) {
    return numMin
  } else return nod(numMin, numMax % numMin);
}

console.log(`НОД (${number1} и ${number2}) равен ${nod(number1, number2)}`);