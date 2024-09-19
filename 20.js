// // Write a program to swap the value of two variable using third variable:
const prompt = require("prompt-sync")({sigint: true}); 

let a = parseFloat(prompt("Enter the value for variable a:"));
let b = parseFloat(prompt("Enter the value for variable b:"));

console.log("Original value of a: " + a);
console.log("Original value of b: " + b);

let temp = a;
a = b;
b = temp;


console.log("Swapped value of a: " + a);
console.log("Swapped value of b: " + b);