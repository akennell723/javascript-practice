/*
 * Name: Augustus Kennell
 * Program Name: data-filtering
 * Date: 8/6/2026
 * Purpose: 
 */

// Initialize variables
const students = [{ name: "Alice", age: 17, grade: 92 },
                  { name: "Bob", age: 18, grade: 84 },
                  { name: "Greg", age: 19, grade: 76 },
                  { name: "Sally", age: 17, grade: 99 },
                  { name: "George", age: 16, grade: 90 }];
let gradeSum = 0;
let passingStudents = [];

// Use a loop to find all students 18 years or older
console.log("All students 18 years or older:");
for(let i = 0; i < students.length; i++)
{
    if(students[i].age >= 18)
    {
        console.log(students[i].name);
    }//end of if statement
}//end of for loop
console.log("");

// Calculate the average grade of all students
for(let i = 0; i < students.length; i++)
{
    gradeSum += students[i].grade;
}//end of for loop
gradeSum /= students.length;
console.log(`Sum of all students' grades: ${gradeSum}`);
console.log("");

// Create an array only containing students with grades over 85
console.log("All students with grades above 85:");
for(let i = 0; i < students.length; i++)
{
    if(students[i].grade > 85)
    {
        passingStudents.push(students[i]);
    }//end of if statement
}//end of for loop
for(let i = 0; i < passingStudents.length; i++)
{
    console.log(passingStudents[i]);
}//end of for loop
console.log("");