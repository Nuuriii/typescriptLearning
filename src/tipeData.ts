//1. string
let myName: string = "Rara";
myName = "Rere";
console.log(myName);

//2. Number
let num: number;
num = 20;
num = 30;
console.log(num);

//3. Boolean
let isMarried: boolean;
isMarried = true;
isMarried = false;
console.log(isMarried);

//3. Any
let anyVariable: any;
anyVariable = "Ini string";
anyVariable = 20;
anyVariable = ["any variable"];
console.log(anyVariable);

//4. Array
let myArr: number[];
myArr = [1, 2, 3, 4, 5];
console.log(myArr);

let myArr2: string[];
myArr2 = ["ini String", "ini juga string"];
console.log(myArr2);

let myArr3: any[];
myArr3 = ["halo", 2, false];
console.log(myArr3);

//5. Tuple
let tupleVar: [string, number];
tupleVar = ["Ini String", 3];
console.log(tupleVar);

let tupleVar2: [number, number];
tupleVar2 = [1, 2];
console.log(tupleVar2);

let tupleVar3: [string, number, boolean];
tupleVar3 = ["Reza", 20, true];
console.log(tupleVar3);

//6. Enum
enum Months {
   Jan = "January",
   Feb = "February",
   Mar = "March",
   Apr = "April",
   May = "May",
   Jun = "June",
   Jul = "Juli",
}

let thisMonth: Months = Months.Jul;
console.log(`Ini bulan ${thisMonth}`);

enum Days {
   Mon = 1,
   Tue,
   Wed,
   Thu,
   Fri,
}

let theDay: Days = Days.Wed;
console.log(theDay);
