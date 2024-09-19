// Write a program to input number and print the 75% of that numbe:
const prompt = require("prompt-sync")({sigint: true}); 


let number = parseFloat(prompt("Enter a number:"));

let percentage75 = (75 / 100) * number;


console.log("Number: " + number);
console.log("75% of the number: " + percentage75);