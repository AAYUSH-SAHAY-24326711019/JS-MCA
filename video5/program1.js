// js is dynamically typed , we dont state the datatype

let num =4 ;
//its type is checked in the runtime , then will execute the code
num = "Aayush";
console.log(num);

//in any statically typed language , we will need to specify the datatype also
//example is c /c++ java , python is a dynamically typed language.

//there are primitive and non primitive datatype
//primitive : number , boolean , undefined, null bigInt,symbol
//object , arrays are the non primitive datatypes

let num1 = 34;
let num2 = 34.5;
console.log(typeof num1, num1);
console.log(typeof num2, num2);
//number will contain the both integer as well as the floating point values

//Infinity and NaN
// if we see in c/c++, divide by zero will lead to an exception.an
// but in js we can still do that

let num3 = 9/0;
console.log(typeof num3, num3);

let num4 = NaN; //any value that is not a Number
console.log(typeof num4, num4);

//any operation done on the string value arithematically results to a NaN result
let num5 = "Hello World"*2;
console.log(typeof num5, num5);

