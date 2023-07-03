"use strict";
// Standard Function
function greeting(message) {
    return `Hello ${message}`;
}
const USER = ["Reza", "Octa", "Rara", "Geza"];
const GREETING = greeting(USER[3]);
console.log(GREETING);
// Argument type
// i try to sum number with function
let sum = (num1, num2) => {
    return num1 + num2;
};
const RESULT = sum(20, 20);
console.log(RESULT);
// Setelah membuat tipe data alias maka selanjutnya tinggal membuat function
const ADD = (param1, param2) => param1 + param2;
const RESULT2 = ADD(30, 20);
console.log(RESULT2);
