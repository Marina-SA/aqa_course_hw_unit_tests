/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

let n;
n = 5;
console.log(n + (n + n) + (n+n+n))

*/

"use strict";
let n;
n = 5;
let nn = String(n) + String(n);
let nnn = String(n) + String(n) + String(n);
console.log(Number(n) + Number(nn) + Number(nnn));