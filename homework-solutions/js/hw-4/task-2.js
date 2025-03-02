/*

Работа с оператором IF:

  1. Создать переменную "minAge" и присвоить ей значение 18
  2. Создать переменную "maxAge" и присвоить ей значение 60
  3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
  4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type
  4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
    - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
    - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
    - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
    - Иначе выводите "Technical work".
  5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

  */

  "use strict";
  const minAge = 18;
  const maxAge = 60;
  const age1 = 10;
  const age2 = 17;
  const age3 = 18;
  const age4 = 19;
  const age5 = 59;
  const age6 = 60;
  const age7 = 61;

// проверяем age = 10
  if(typeof age1 !== "number"){
    console.log("Incorrect data type");
  }

  if(age1 < minAge){
    console.log("You don't have access cause your age is " + age1 + " It's less then " + minAge)
  }else if(age1 >= minAge && age1 < maxAge){
    console.log ("Welcome  !");
  }else if(age1 > maxAge){
      console.log("Keep calm and look Culture channel");
  }
  

  // проверяем age = 17
  if(typeof age2 !== "number"){
    console.log("Incorrect data type");
  }

  if(age1 < minAge){
    console.log("You don't have access cause your age is " + age2 + " It's less then " + minAge)
  }else if(age2 >= minAge && age2 < maxAge){
    console.log ("Welcome  !");
  }else if(age2 > maxAge){
      console.log("Keep calm and look Culture channel");
  }

  // Проверяем age3 = 18
if (typeof age3 !== "number") {
  console.log("Incorrect data type");
}

if (age3 < minAge) {
  console.log("You don't have access cause your age is " + age3 + ". It's less than " + minAge);
} else if (age3 >= minAge && age3 < maxAge) {
  console.log("Welcome!");
} else if (age3 > maxAge) {
  console.log("Keep calm and look Culture channel");
}

// Проверяем age4 = 19
if (typeof age4 !== "number") {
  console.log("Incorrect data type");
}

if (age4 < minAge) {
  console.log("You don't have access cause your age is " + age4 + ". It's less than " + minAge);
} else if (age4 >= minAge && age4 < maxAge) {
  console.log("Welcome!");
} else if (age4 > maxAge) {
  console.log("Keep calm and look Culture channel");
}

// Проверяем age5 = 59
if (typeof age5 !== "number") {
  console.log("Incorrect data type");
}

if (age5 < minAge) {
  console.log("You don't have access cause your age is " + age5 + ". It's less than " + minAge);
} else if (age5 >= minAge && age5 < maxAge) {
  console.log("Welcome!");
} else if (age5 > maxAge) {
  console.log("Keep calm and look Culture channel");
}

// Проверяем age6 = 60
if (typeof age6 !== "number") {
  console.log("Incorrect data type");
}

if (age6 < minAge) {
  console.log("You don't have access cause your age is " + age6 + ". It's less than " + minAge);
} else if (age6 >= minAge && age6 < maxAge) {
  console.log("Welcome!");
} else if (age6 > maxAge) {
  console.log("Keep calm and look Culture channel");
}

// Проверяем age7 = 61
if (typeof age7 !== "number") {
  console.log("Incorrect data type");
}

if (age7 < minAge) {
  console.log("You don't have access cause your age is " + age7 + ". It's less than " + minAge);
} else if (age7 >= minAge && age7 < maxAge) {
  console.log("Welcome!");
} else if (age7 > maxAge) {
  console.log("Keep calm and look Culture channel");
}