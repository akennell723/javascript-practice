/*
 * Name: Augustus Kennell
 * Program Name: array-analysis
 * Date: 8/6/2026
 * Purpose: Analyzes an array of numbers using various functions
 */

// Initialize numbers array
let numbers = [5, 41, 34, 92, 67, 3, 9, 45];

// Call methods
console.log(`Largest Number: ${findMaximum(numbers)}`);
console.log(`Second Largest Number: ${findSecondLargest(numbers)}`);
console.log(`Smallest Number: ${findMinimum(numbers)}`);
console.log(`Sum of All Numbers: ${calculateSum(numbers)}`);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find the largest number in an array
function findMaximum(numbers)
{
    // Initialize maximum number
    let maximum = 0;

    // Search for the largest number in the entered array
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] > maximum)
        {
            maximum = numbers[i];
        }// End of if statement
    }// End of for statement

    // Return maximum
    return maximum;
}// End of findMaximum() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find the second largest number in an array
function findSecondLargest(numbers)
{
    // Initialize maximum number
    let largest = 0;
    let secondLargest = 0;

    // Search for the largest number in the entered array
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] > largest)
        {
            secondLargest = largest;
            largest = numbers[i];
        }else if(numbers[i] < largest && numbers[i] > secondLargest)
        {
            secondLargest = numbers[i];
        }// End of if...else if statement
    }// End of for statement

    // Return secondLargest
    return secondLargest;
}// End of findSecondLargest() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find the smallest number in an array
function findMinimum(numbers)
{
    // Initialize maximum number
    let minimum = 999999;

    // Search for the largest number in the entered array
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] < minimum)
        {
            minimum = numbers[i];
        }// End of if statement
    }// End of for statement

    // Return minimum
    return minimum;
}// End of findMinimum() function
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find the array's sum of all numbers
function calculateSum(numbers)
{
    // Initialize maximum number
    let sum = 0;

    // Search for the largest number in the entered array
    for(let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }// End of for statement

    // Return sum
    return sum;
}// End of calculateSum() function