/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // Ваш код
if (typeof word !== "string") return false; //проверить, что передаем только тип данных - строка
const lower = word.toLowerCase();            // приводим к нижнему регистру
if (lower === (lower.split("").reverse().join(""))){return true;}
else {return false}

}
console.log(isPalindrom("radar"));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/
let a = "Без труда не вытащишь и рыбку из пруда"

function findLongestWords(sentence) {
  if (typeof sentence !== "string" || sentence.trim() === "") {  // проверяем - что это строка и не пустая
    return [];
  }
  const words = sentence.trim().split(/\s+/); // Разбиваем предложение на массив слов
  let longestWords = [""]; // Массив для хранения самых длинных слов
  let maxLength = 0; // Переменная для отслеживания максимальной длины слова

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length; // Обновляем максимальную длину
      longestWords = [word]; // Очищаем массив и добавляем новое длинное слово
    } else if (word.length === maxLength) {
      longestWords.push(word); // Добавляем слово, если оно такой же длины
    }
  }

  return longestWords;
}
console.log(findLongestWords(a));

export { isPalindrom, findLongestWords };
