// Write a program to calculate the area of a rectangle :
const prompt = require("prompt-sync")({sigint: true}); 


let width = parseFloat(prompt("Enter the width of the rectangle:"));
let height = parseFloat(prompt("Enter the height of the rectangle:"));


let area = width * height;


console.log("Width: " + width);
console.log("Height: " + height);
console.log("Area of the rectangle: " + area);