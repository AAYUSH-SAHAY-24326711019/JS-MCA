//declaring a scope

/*
scope is 2 types : global and local scope

in the scope of a function we will use the var keyword.

in the scope of the global , we will use the let and const keyword

global accessible throughout
block specific to a function.
"Can be used inside the block of other functions"
*/

function localScope(){
   var a=10;
    console.log(a);
}
//
//function will run only on calling the function.

// console.log(a); - this line cannot run since a is a var limited to the scope of the function 'localFunction()' only.

{
    let a =100;
    console.log(a); //1st print 100
    localScope();   //2nd print 10
}

//let belonged to the scope level.
//var has function scope
// a is the variable of same name, present in both the scope as well as the function.

//scope led to print 100,
//function led to print 10