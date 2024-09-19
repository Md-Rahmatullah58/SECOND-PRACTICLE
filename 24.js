// Write a program to find the weather is a leap year or not:
const prompt = require("prompt-sync")({sigint: true}); 


let year = parseInt(prompt("Enter a year:"));

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}