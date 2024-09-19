// WAP to input four numbers and its average
const prompt = require("prompt-sync")({sigint: true}); 

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));
let num4 = parseFloat(prompt("Enter the fourth number:"));


let average = (num1 + num2 + num3 + num4) / 4;


console.log("The average of the four numbers is: " + average);