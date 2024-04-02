#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\tWelcome to my Number Guessing Game");
const number = Math.floor(Math.random() * 5 + 1);
let input = await inquirer.prompt([
    {
        type: "number",
        name: "userInput",
        message: "Enter Any Number Between 1 to 5 => ",
    },
]);
if (input.userInput === number) {
    console.log("Congrats! You Guessed it right.");
}
else {
    console.log(`Oops! You guessed it wrong. The Number was ${number}.`);
}
