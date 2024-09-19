// WAP to input numbers and find its sqaure:
const prompt = require("prompt-sync")({sigint: true}); 

let num = parseFloat(prompt("Enter a number:"));


let square = num * num;


console.log("The square of " + num + " is: " + square);