// function
function greet(yourName: string) {
   return `Hello ${yourName}`;
}
console.log(greet("Bob"));

const userName = (user: string) => {
   return `Hello ${user}`;
};
console.log(userName("Reza"));

const greeting = (): void => {
   console.log("Hello, Nice to meet you.");
};
greeting();

// i try to sum number with function
let sum = (num1: number, num2: number) => {
   return num1 + num2;
};
console.log(sum(10, 10));
