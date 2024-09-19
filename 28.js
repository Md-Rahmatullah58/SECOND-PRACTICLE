// Write a program to input number and find its factorial:
const prompt = require("prompt-sync")({sigint: true}); 


let number = parseInt(prompt("Enter a number to find its factorial:"));

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1; 
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i; 
        }
        return result;
    }
}


let result = factorial(number);
console.log("The factorial of " + number + " is: " + result);