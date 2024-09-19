// WAP to input two number and find its subtraction.
const prompt = require("prompt-sync")({sigint: true}); 


let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));


let result = num1 - num2;


console.log("The result of the subtraction is: " + result);