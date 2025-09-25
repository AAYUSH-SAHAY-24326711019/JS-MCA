let name1 = "Aayush Sahay";
console.log(typeof name1 , name1);

// we can define the strings in 3 ways :
// i. use of '' (single quotes)
// ii. use of "" (double quotes)
// iii . use of ``(backticks / template literals)

//Boolean stores the 2 types of values : true /false

let isLogin = true;
console.log(typeof isLogin, isLogin);


//undefined datatype
//only declared and value is undefined, using this , better us the null
let a=null; //when is defined as null will be set up as the null , becomes an object
console.log(typeof a, a);


let myName = "Name";
let otherName = "Name";
console.log(myName == otherName);
myName = Symbol("Name"); //Symbol will give a unique property value to our variable
console.log(myName == otherName);

//bigint is a number where digits more than 15 numbers.
//2 ways to make the big int
//add n at the end of the number.

let x = 1234n;
console.log(typeof x , x);
let y = BigInt(4343);
console.log(typeof y , y);

//object will store the values of other datatypes automatically
let myDetails = {
    "name":"Aayush",
    "Age":"21"
}; //always in the key and values format
console.log(myDetails);