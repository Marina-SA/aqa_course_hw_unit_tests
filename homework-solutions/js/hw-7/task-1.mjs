/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
"use strict";
function mergeArrays(...arrs) {
  return [...arrs.flat()];
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));


/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
 */
// function devideBy(sentence) {
// Ваш код
let a = "I am super engineer la la la";

function devideBy(sentence) {
  // Убираем лишние пробелы и делим по одному или более пробелам
  let words = sentence.trim().split(/\s+/);

  // Делаем всё строчными, соединяем через "_"
  let b = words.join("_").toLowerCase();

  let result = "";

  for (let i = 0; i < b.length; i++) {
    if (b[i] === "_") {
      result += "_" + b[i + 1].toUpperCase();
      i++;
    } else {
      result += b[i];
    }
  }

  return result;
}
 
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      let arr = [0, 1]; // начальные значения
  
      for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]; // сохраняем в массив
      }
  
      return arr[n]; // возвращаем нужное число
    }
  }
  
  console.log(fibonacci(68))


export { mergeArrays, devideBy, fibonacci };