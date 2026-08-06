/*
 * Name: Augustus Kennell
 * Program Name: array-analysis
 * Date: 8/5/2026
 * Purpose: Find all numbers between 1-20 that can be divided by 3 using a for loop
 */

// Initialize number pattern array
let numberPattern = [];

// Find all numbers divisible by 3 between 1-20
for(let i = 1; i <= 20; i++)
{
    if(i % 3 === 0)
    {
        numberPattern.push(i);
    }// End of if statement
}// End of for loop

// Print result
console.log(numberPattern);