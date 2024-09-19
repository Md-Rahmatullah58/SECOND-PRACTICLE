// Write a program to inter time in a second and convert into minutes and seconds :
const prompt = require("prompt-sync")({sigint: true}); 

let totalSeconds = parseInt(prompt("Enter the time in seconds:"));

let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

console.log("Time in seconds: " + totalSeconds);
console.log("Minutes: " + minutes);
console.log("Seconds: " + seconds);