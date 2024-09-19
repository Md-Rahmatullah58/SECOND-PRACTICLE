// // Write a program to calculate the area of a circle :
const prompt = require("prompt-sync")({sigint: true}); 

let radius = parseFloat(prompt("Enter the radius of the circle:"));

const pi = Math.PI; 
let area = pi * radius * radius;

console.log("Radius: " + radius);
console.log("Area of the circle: " + area);