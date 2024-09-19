// Write a program to enter the principal ,rate ,time  in the year and find the simple interest:
const prompt = require("prompt-sync")({sigint: true}); 

let principal = parseFloat(prompt("Enter the principal amount:"));
let rate = parseFloat(prompt("Enter the annual interest rate (in %):"));
let time = parseFloat(prompt("Enter the time (in years):"));


let simpleInterest = (principal * rate * time) / 100;


console.log("Principal: " + principal);
console.log("Rate: " + rate + "%");
console.log("Time: " + time + " years");
console.log("Simple Interest: " + simpleInterest);