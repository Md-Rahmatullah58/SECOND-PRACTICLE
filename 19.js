// Write a program to swap the value of two variable without using third variable:

const prompt = require("prompt-sync")({sigint: true}); 

let a = parseFloat(prompt("Enter the value of a:"));
let b = parseFloat(prompt("Enter the value of b:"));

a = a + b; 
b = a - b; 
a = a - b; 

console.log("After swapping:");
console.log("a: " + a);
console.log("b: " + b);