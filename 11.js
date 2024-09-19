// WAP to input number and its remainder
const prompt = require("prompt-sync")({sigint: true}); 

let dividend = parseFloat(prompt("Enter the dividend:"));
let divisor = parseFloat(prompt("Enter the divisor:"));

let remainder = dividend % divisor;


console.log("Dividend: " + dividend);
console.log("Divisor: " + divisor);
console.log("Remainder: " + remainder);