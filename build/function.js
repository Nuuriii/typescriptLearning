"use strict";
// function
function greet(yourName) {
    return `Hello ${yourName}`;
}
console.log(greet("Bob"));
const userName = (user) => {
    return `Hello ${user}`;
};
console.log(userName("Reza"));
const greeting = () => {
    console.log("Hello, Nice to meet you.");
};
greeting();
// i try to sum number with function
let sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(10, 10));
