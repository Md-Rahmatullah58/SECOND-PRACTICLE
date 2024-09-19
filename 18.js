// WAP to input three names on the screen separate with single statment:
const prompt = require("prompt-sync")({sigint: true}); 

let name = prompt("Enter your name:");


console.log(name + "\n" + name + "\n" + name);