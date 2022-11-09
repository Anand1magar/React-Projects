
"use strict";
const ps = require("prompt-sync");
const prompt = ps();


let age = 12;

function shouldIGetALicenceV2(age, bribe, whitelisted){

    if(!whitelisted){
        console.log("You are black listed", whitelisted);
        return;

    }

 if((age<= 18 && bribe > 100) || bribe > 500){
    console.log("You are passed");
 } else if(age > 18){
    console.log("The person is above 18");
 }else if (bribe < 100){
    console.log("The person is below 18");
 }
}


shouldIGetALicenceV2(15, 200, );
