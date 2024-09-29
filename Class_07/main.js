"use strict";
/* Class Seven:
 - Functions
 I. Introduction
 II. Arrow Function (Also called: Lambda Function)

 - Parameters & Arguments
 I. Introduction
 II. Default Parameters
 
 - Object
 */
// Lecture: Function
function greet() {
    return "hello world";
}
console.log(greet());
let message = greet(); // hello world
console.log(message); // Alternate way of printing functions
let greeting = () => "Hello!!"; // Arrow Function
let result = greeting();
console.log(result);
// Task: Function
function sum() {
    return 2 + 2;
}
console.log(sum());
// Lecture: Parameters & Arguments 
function addition(number1, number2) {
    return number1 + number2;
}
console.log(addition(10, 10));
function FullName(FirstName, LastName) {
    return `${FirstName} ${LastName}`;
}
console.log(FullName("Sanika", "Sajwani"));
function DefaultLastName(FirstName, LastName = "Sajwani") {
    return `${FirstName} ${LastName}`;
}
console.log(DefaultLastName("Sanika"));
// Tasks: Parameters & Arguments 
function modulus(number3, number4) {
    return number3 % number4;
}
console.log(modulus(10, 3));
function subtraction(number5, number6) {
    return number5 - number6;
}
console.log(subtraction(150, 30));
function multiplication(number7, number8) {
    return number7 - number8;
}
console.log(multiplication(15, 3));
// Lecture: Object
let StudentData = {
    name: "XXX",
    RollNumber: 1196,
    Subject: "CS"
};
console.log(StudentData.name.toUpperCase());
console.log(StudentData.RollNumber);
let information = `My name is ${StudentData.name} and roll number is ${StudentData.RollNumber}.`;
console.log(information);
