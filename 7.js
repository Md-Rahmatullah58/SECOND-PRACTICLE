// WAP to input two number and find its sum, diffrence, and quotient:
const prompt = require("prompt-sync")({sigint: true}); 

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let quotient = (num2 !== 0) ? num1 / num2 : "undefined"; 


console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Quotient: " + quotient);
