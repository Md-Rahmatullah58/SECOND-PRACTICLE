// WAP to input three number and find its product.
const prompt = require("prompt-sync")({sigint: true}); 


function calculateProduct() {
   
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let num3 = parseFloat(prompt("Enter the third number:"));

    let product = num1 * num2 * num3;

    console.log("The product of the three numbers is: " + product);
  }
  
 
  calculateProduct();