document.getElementById('mHead').innerText="Hello World";
document.getElementById('mPara').innerText="This is my paragraph";

//window.alert("Welcome to our page !")

let noOfDays = 7;

document.getElementById('new-para1').innerText=`The no. of Days in a week is = ${noOfDays}`;

document.getElementById('new-para2').innerText=`The type of noOfDays variable is = ${typeof noOfDays}`;

let fullName = "Aayush Sahay";
let age = 21;
let isStudent = true;

document.getElementById('new-para3').innerHTML=`<b>Name</b> = ${fullName}<br><b>Age</b> = ${age}<br><b>Studying</b> = ${isStudent}`;

// let userName = window.prompt("Tell us your user name :");
// let userAge = window.prompt("Tell us your age :");
// let whatIsUser = window.prompt("Tell us whether you are a professional / student :")

// document.getElementById('new-para4').innerHTML=`<h4>Visitor Section</h4><b>Name</b> = ${userName}<br><b>Age</b> = ${userAge}<br><b>Role :</b> = ${whatIsUser}<br>`;



document.getElementById("submit1").onclick=function(){
    let userName = document.getElementById("inp1").value;
    let userAge = document.getElementById("inp2").value;
    let whatIsUser = document.getElementById("inp3").value;
    document.getElementById('new-para4').innerHTML=`<h4>Visitor Section</h4><b>Name</b> = ${userName}<br><b>Age</b> = ${userAge}<br><b>Role :</b> = ${whatIsUser}<br>`;
    document.getElementById('mHead').textContent=`Hello ${userName}`;
}



