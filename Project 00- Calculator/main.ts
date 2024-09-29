#! /usr/bin/env node

import inquirer from "inquirer";

const UserValues: {
    Number1: number, 
    Number2: number, 
    Operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "Number1",
        message: "Enter the first value: "
    },
    {
        type: "number",
        name: "Number2",
        message: "Enter the second value: "
    },
    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/"],
        message: "Select operator: "
    },
]);

const {Number1, Number2, Operator} = UserValues;

if (Number1 && Number2 && Operator) {
    let result: number; 
    if (Operator === "+") {
        result = Number1 + Number2;
    } else if (Operator === "-") {
        result = Number1 - Number2;
    } else if (Operator === "*") {
        result = Number1 * Number2;
    } else {
        result = Number1 / Number2; 
    }

    console.log("Your result: " + result); 
    
} else {
    console.log("Enter valid input");
}