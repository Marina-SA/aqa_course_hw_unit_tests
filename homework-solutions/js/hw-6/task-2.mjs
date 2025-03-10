/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull = null; // присваеваем null что бы не было undefined

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

// приводим к нижнему регистру все пиццы
let competitorPizzasLower = [];
for (let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzasLower.push(competitorPizzas[i].toLowerCase());
}
let myPizzasT1Lower = [];
for (let i = 0; i < myPizzasT1.length; i++) {
  myPizzasT1Lower.push(myPizzasT1[i].toLowerCase());
}
let myPizzasT2Lower = []; 
for (let i = 0; i < myPizzasT2.length; i++) {
  myPizzasT2Lower.push(myPizzasT2[i].toLowerCase());
}

// проверяем, какие пиццы есть только у нас 
for (let i = 0; i < myPizzasT1Lower.length; i++) {
  let pizzaName = myPizzasT1Lower[i];

  if (!competitorPizzasLower.includes(pizzaName)) { 
    resultUnique.push(myPizzasT1[i]); 
  }
}

// Если у нас нет уникальных пицц, устанавливаем `resultNull`
if (resultUnique.length === 0) {
  resultNull = "null";
}

// myPizzasT2 - проверяем, какие пиццы есть только у нас 
let resultUniqueT2 = [];
for (let i = 0; i < myPizzasT2Lower.length; i++) {
  let pizzaName = myPizzasT2Lower[i]; 

  if (!competitorPizzasLower.includes(pizzaName)) { 
    resultUniqueT2.push(myPizzasT2[i]); 
  }
}


// Выводим результат
console.log("Уникальные пиццы (T1):", resultUnique);
console.log("Результат (T1):", resultNull);
console.log("Уникальные пиццы (T2):", resultUniqueT2);

export { resultNull, resultUnique };