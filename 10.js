// WAP to input 5 subjects of marks and print sum and average the following:
const prompt = require("prompt-sync")({sigint: true}); 

let math = parseFloat(prompt("Enter marks for MATH:"));
let english = parseFloat(prompt("Enter marks for ENGLISH:"));
let hindi = parseFloat(prompt("Enter marks for HINDI:"));
let computer = parseFloat(prompt("Enter marks for COMPUTER:"));
let gk = parseFloat(prompt("Enter marks for G.K:"));

let totalMarks = math + english + hindi + computer + gk;
let average = totalMarks / 5;

console.log("REPORT");
console.log("****************");
console.log("(1) MATH = " + math);
console.log("(2) ENGLISH = " + english);
console.log("(3) HINDI = " + hindi);
console.log("(4) COMPUTER = " + computer);
console.log("(5) G.K = " + gk);
console.log("Average = " + average.toFixed(2)); 
console.log("*******************");


