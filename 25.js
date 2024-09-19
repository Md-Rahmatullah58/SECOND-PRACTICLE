// WAP to input number and find its even or odd number:
const prompt = require("prompt-sync")({sigint: true}); 

let number = parseInt(prompt("Enter a number:"));
// let number=6;

if (number % 2 === 0) {
    console.log("The number " + number + " is even.");
} else {
    console.log("The number " + number + " is odd.");
}