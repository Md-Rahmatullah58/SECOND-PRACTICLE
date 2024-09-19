// Write a program to input character and tell the type of vowels:
const prompt = require("prompt-sync")({sigint: true}); 

let char = prompt("Enter a character:");

char = char.toLowerCase();

if (char.length === 1 && char.match(/[a-z]/i)) {
  
    switch (char) {
        case 'a':
            console.log(char + " is a vowel and specifically an 'a'.");
            break;
        case 'e':
            console.log(char + " is a vowel and specifically an 'e'.");
            break;
        case 'i':
            console.log(char + " is a vowel and specifically an 'i'.");
            break;
        case 'o':
            console.log(char + " is a vowel and specifically an 'o'.");
            break;
        case 'u':
            console.log(char + " is a vowel and specifically an 'u'.");
            break;
        default:
            console.log("The character is not a vowel.");
            break;
    }
} else {
    console.log("Please enter a single alphabetic character.");
}