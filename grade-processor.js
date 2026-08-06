/*
 * Name: Augustus Kennell
 * Program Name: array-analysis
 * Date: 8/5/2026
 * Purpose: Process different grades in an array using if...else statements
 */

// Initialize variables
let allStudents = ['A', 'B-', 1, 4, 5, 2];
let studentsWhoPass = [];
let passingStudents = 0;
let failingStudents = 0;

// Go through grades and find passing grades
for(let i = 0; i < allStudents.length; i++)
{
    // Check current variable's type
    if(typeof allStudents[i] === 'number')
    {
        if(allStudents[i] >= 3 && allStudents[i] <= 5)
        {
            studentsWhoPass.push(allStudents[i]);
            passingStudents++;
        }else if(allStudents[i] < 1 || allStudents[i] > 5)
        {
            console.log(`Student Grade ${i + 1} contains an invalid numerical grade.`);
        }else
        {
            failingStudents++;
        }// End of if(allStudents[i] >= 3 && allStudents[i] <= 5)...else if...else statement
    }else if(typeof allStudents[i] === 'string')
    {
        if(allStudents[i] === 'A' || allStudents[i] === 'A-' || allStudents[i] === 'B' || allStudents[i] === 'B-' 
        || allStudents[i] === 'C' || allStudents[i] === 'C-')
        {
            //translate grade into numerical
            if(allStudents[i] === 'A' || allStudents[i] === 'A-')
            {
                studentsWhoPass.push(5);
            }else if(allStudents[i] === 'B' || allStudents[i] === 'B-')
            {
                studentsWhoPass.push(4);
            }else
            {
                studentsWhoPass.push(3);
            }// End of if(allStudents[i] === 'A' || allStudents[i] === 'A-')...else if...else statement

            //increment passingStudent variable
            passingStudents++;
        }else if(allStudents[i] !== 'D' || allStudents[i] !== 'F')
        {
            console.log(`Student Grade ${i + 1} contains an invalid letter grade.`);
        }else
        {
            failingStudents++;
        }// End of if(allStudents[i] === 'A' || allStudents[i] === 'A-'...)...else if...else statement
    }else
    {
        console.log(`Student Grade ${i + 1} is of an invalid type.`);
    }// End of if(typeof allStudents[i] === 'number')...else if...else statement
}// End of for loop

// Print studentsWhoPass's values and all total passes and fails
console.log(`studentsWhoPass's Values: ${studentsWhoPass}`);
console.log(`Total Passing Students: ${passingStudents}`);
console.log(`Total Failing Students: ${failingStudents}`);