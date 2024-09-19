// WAP to calculate following:
const prompt = require("prompt-sync")({sigint: true}); 

let salary = parseFloat(prompt("Enter the salary:"));

let HRA = 0.20 * salary;
let DA = 0.15 * salary;
let PF = 0.10 * salary;


let netSalary = salary + HRA + DA - PF;


console.log("Salary: " + salary);
console.log("HRA: " + HRA);
console.log("DA: " + DA);
console.log("PF: " + PF);
console.log("Net Salary: " + netSalary);