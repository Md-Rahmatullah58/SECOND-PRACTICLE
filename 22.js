// Write a program to input character and check whether it is vowel and consonant:
const prompt = require("prompt-sync")({sigint: true}); 


let char = prompt("Enter a character:");

char = char.toLowerCase();


if (char.length === 1 && char.match(/[a-z]/i)) {
    
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        console.log(char + " is a vowel.");
    } else {
        console.log(char + " is a consonant.");
    }
} else {
    console.log("Please enter a single alphabetic character.");
}