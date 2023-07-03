// Standard Function
function greeting(message: string) {
   return `Hello ${message}`;
}

const USER: string[] = ["Reza", "Octa", "Rara", "Geza"];
const GREETING = greeting(USER[3]);
console.log(GREETING);

// Argument type
// i try to sum number with function
let sum = (num1: number, num2: number) => {
   return num1 + num2;
};
const RESULT = sum(20, 20);
console.log(RESULT);

// function as type
// kita buat tipe data alias untuk mengatur argument function dan hasil pengembalian functionnya
type Add = (num1: number, num2: number) => number;
// Setelah membuat tipe data alias maka selanjutnya tinggal membuat function
const ADD: Add = (param1: number, param2: number) => param1 + param2;
const RESULT2: number = ADD(30, 20);
console.log(RESULT2);

// Default Parameter

const userName2 = (firstName = "Anonymus", lastName = "Anonymus") => {
   return `${firstName} ${lastName}`;
};

const myName2 = userName2("Rara");
console.log(myName2);
