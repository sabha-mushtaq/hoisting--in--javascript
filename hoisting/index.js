// Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.
console.log(addNumbers(3,4));
function addNumbers(a,b) {
    return a + b;
    
};
// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting@
console.log(productfunction());
let productfunction = function multiplyNumbers(a,b) {
    return a * b ;
}
// Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting@
function addnumbers1(a,b) {
    console.log(sum);
    var sum = a + b ;
}
addnumbers1(3,4);
// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting@
{
//before declaring
console.log(name);
console.log(address);
console.log(profession);

    let name = 'rahul';
    var address = 'k p raod';
    const profession = 'doctor';
    //after declaring
    console.log(name);
console.log(address);
console.log(profession);
}
//(@ Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.
{

    let myname ;
    console.log(myname);
    myname = 'check';
    console.log(myname);
}