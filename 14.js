// Write a program to enter days and convert it into months and days:
const prompt = require("prompt-sync")({sigint: true}); 

let totalDays = parseInt(prompt("Enter the number of days:"));


const daysPerMonth = 30;

let months = Math.floor(totalDays / daysPerMonth);
let days = totalDays % daysPerMonth;

console.log("Total days: " + totalDays);
console.log("Months: " + months);
console.log("Days: " + days);