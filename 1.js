// WAP to print following pattern
const prompt = require("prompt-sync")({sigint: true}); 

let word = "INDIA";
let spaces = 0;

for (let i = 0; i < 4; i++) {
  console.log(" ".repeat(spaces) + word);
  spaces += 9; 
}

