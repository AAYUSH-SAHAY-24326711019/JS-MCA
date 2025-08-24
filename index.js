document.getElementById('mHead').innerText="Hello World";
document.getElementById('mPara').innerText="This is my paragraph";

window.alert("Welcome to our page !")

let noOfDays = 7;

document.getElementById('new-para1').innerText=`The no. of Days in a week is = ${noOfDays}`;

document.getElementById('new-para2').innerText=`The type of noOfDays variable is = ${typeof noOfDays}`;

let fullName = "Aayush Sahay";
let age = 21;
let isStudent = true;

document.getElementById('new-para3').innerHTML=`<b>Name</b> = ${fullName}<br><b>Age</b> = ${age}<br><b>Studying</b> = ${isStudent}`;
