/* Class Eight:
1. Variable Scope: Global Variable & Local Variable 
2. Hoisting 
3. Objects
4. Inquirer 
*/

// Variable Scope: Global Variable & Local Variable
let globalVar = "Accessible Everywhere";
function showExample(){
let localVar = "Accessible only inside this function";
console.log(globalVar); // Works
console.log(localVar); // Works
}
showExample()
// console.log(localVar); Error: localVar is  not defined

let age = 22;
if (true) {
    let age = 18; // Inside the if block, creating a new scope with the variable 'age' 
    console.log(age); // Output will be 18, as 'age' within this block refers to the variable declared inside it
}
console.log(age); // Output will be 22, as the 'age' variable inside the if block is scoped only to that block

// Hoisting
// Example 1:
/* console.log(number) Haven't declared or initialized variable 'number'. 
Variable declarations are hoisted to the top of their scope */
var number = 10; 
// Declare and initialize the variable 'number' with the value 10
console.log(number); // Output will be 10

// Example 2:
// Variables declared with 'let' and 'const' are also hoisted, but not initialized
// They remain in the "Temporal Dead Zone" until they're initialized
let IDnumber; // Declare a variable 'IDnumber' without initializing it
console.log(IDnumber); 
// Output will be undefined, as 'IDnumber' hasn't been assigned a value yet
IDnumber = 18990; // Assign the value 18990 to the variable 'IDnumber'

// Example 3:
// Variables declared with 'var' are initialized with 'undefined' during hoisting
// So, accessing them before their declaration returns 'undefined'
var number1;
console.log(number1); 
// Output will be undefined, as 'number1' hasn't been assigned a value yet
number1 = 18; // Assign the value 18 to the variable 'number1'


// Objects
// Example 1: Defining a basic object in TypeScript
let examSheetInformation = { 
    name: "Sam", 
    IDnumber: 19070,
    major: "Data Science"
}; 

// Accessing properties of the object and printing them
console.log("Name: " + examSheetInformation.name + "\nEnrollment ID: " + 
examSheetInformation.IDnumber + "\nMajor: " + examSheetInformation.major);

// Example 2: Defining a car object
let car = {
    modelNo: "718 Boxster/Cayman",
    yearIntroduced: 1996, 
    currentModel: 2016
}; 

// Displaying car object as a table with specified column headings
console.table([car], ['modelNo', 'yearIntroduced', 'currentModel']);

// Inquirer 
/* On Terminal:
Step 1: npm init -y (To create package.json file)
Step 2: npm i inquirer (To install inquirer package)
Step 3: npm i --save-dev @types/inquirer (To install the TypeScript type definitions for the 'inquirer' package)
In tsconfig.json
Line 14: "target": "ES2022", 
Line 28: "module": "NodeNext",  
Line 30: "moduleResolution": "NodeNext", 
In package.json
Add after line 5: "type": "module",
*/

import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "Q1",
        message: "What is your name?", 
        type: "input" // text
    }, {
        name: "Q2",
        message: "What is your gender?", 
        type: "list", 
        choices: ["Male", "Female"]
    }]);

let result = `Welcome ${answer.Q1}!`;
console.log(result); 