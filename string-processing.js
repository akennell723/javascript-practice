/*
 * Name: Augustus Kennell
 * Program Name: string-processing
 * Date: 8/6/2026
 * Purpose: Analyzes an array of strings using for loops
 */

// Initialize variables
let videoGames = ['Honkai Star Rail', 'Kingdom Hearts', 'Minecraft', 'Tomodachi Life', 'Voices of the Void'];
let charSum = 0;

// Display all games in a numbered list
console.log("Traditional for loop:");
for(let i = 0; i < videoGames.length; i++)
{
    console.log(`${i + 1}. ${videoGames[i]}`);
}//end of for loop
console.log("");

// Display all game names in uppercase using a for...of loop
console.log("For...of loop (uppercase):");
for(const videoGame of videoGames)
{
    console.log(videoGame.toUpperCase());
}//end of for loop
console.log("");

// Display the sum of all characters in all video game titles using a forEach method
console.log("Character count:");
videoGames.forEach(charLength);
console.log(`Total characters across all titles: ${charSum}`);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Get current string's character length
function charLength(videoGame)
{
    charSum += videoGame.length;
}// End of charLength function