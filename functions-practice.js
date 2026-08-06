/*
 * Name: Augustus Kennell
 * Program Name: array-analysis
 * Date: 8/4/2026
 * Purpose: Demonstrates how different types of functions work
 */

// basic functions
sayHello();
introduceYourself("Gus");

// default parameters
greetPerson("Alex");
greetPerson("Maria", "Hi");

// returns sum variable
const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

// return full name variable
const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

// all of the above
const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);

// input function
printTotal(calculateTip(25, 18));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// say hello function
function sayHello()
{
    console.log("Hello, world!");
}// end of sayHello() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// introduce yourself function
function introduceYourself(name)
{
    console.log(`Hi, my name is ${name}!`);
}// end of introduceYourself() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//greet person
function greetPerson(name, greeting = "Hello")
{
    console.log(`${greeting}, ${name}!`);
}// end of greetPerson() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// add two numbers
function addNumbers(num1, num2)
{
    let sum = num1 + num2;
    return sum;
}// end of addNumbers() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// create a full name
function createFullName(firstName, lastName)
{
    name = `${firstName} ${lastName}`;
    return name;
}// end of createFullName() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// calculate a tip
function calculateTip(billAmount, tipPercentage = 15)
{
    total = billAmount + (billAmount * (tipPercentage / 100));
    return total;
}// end of calculateTip() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// print a tip result
function printTotal(tip)
{
    console.log(`Your Total With Tip: $${tip}`);
}// end of printTip() function