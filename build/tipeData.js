"use strict";
//1. string
let myName = "Rara";
myName = "Rere";
console.log(myName);
//2. Number
let num;
num = 20;
num = 30;
console.log(num);
//3. Boolean
let isMarried;
isMarried = true;
isMarried = false;
console.log(isMarried);
//3. Any
let anyVariable;
anyVariable = "Ini string";
anyVariable = 20;
anyVariable = ["any variable"];
console.log(anyVariable);
//4. Array
let myArr;
myArr = [1, 2, 3, 4, 5];
console.log(myArr);
let myArr2;
myArr2 = ["ini String", "ini juga string"];
console.log(myArr2);
let myArr3;
myArr3 = ["halo", 2, false];
console.log(myArr3);
//5. Tuple
let tupleVar;
tupleVar = ["Ini String", 3];
console.log(tupleVar);
let tupleVar2;
tupleVar2 = [1, 2];
console.log(tupleVar2);
let tupleVar3;
tupleVar3 = ["Reza", 20, true];
console.log(tupleVar3);
//6. Enum
var Months;
(function (Months) {
    Months["Jan"] = "January";
    Months["Feb"] = "February";
    Months["Mar"] = "March";
    Months["Apr"] = "April";
    Months["May"] = "May";
    Months["Jun"] = "June";
    Months["Jul"] = "Juli";
})(Months || (Months = {}));
let thisMonth = Months.Jul;
console.log(`Ini bulan ${thisMonth}`);
var Days;
(function (Days) {
    Days[Days["Mon"] = 0] = "Mon";
    Days[Days["Tue"] = 1] = "Tue";
    Days[Days["Wed"] = 2] = "Wed";
    Days[Days["Thu"] = 3] = "Thu";
    Days[Days["Fri"] = 4] = "Fri";
})(Days || (Days = {}));
let theDay = Days.Mon;
console.log(theDay);
