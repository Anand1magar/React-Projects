"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let name = prompt("Enter your Name: ")
let age = prompt("What is your age ? :")
let address = prompt("What is your address ? :")


function printUserDetails(){
console.log("YOur name is " + name);
console.log("Your age is "+ age);
console.log("Your address is " + address);

}


console.log(printUserDetails());