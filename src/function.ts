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
