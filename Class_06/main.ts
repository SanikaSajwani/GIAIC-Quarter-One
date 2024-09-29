/* Class six: 
1. If Else Statements
2. Conditional Statements 
*/


// If Else Statement Condition 1
let age1 = 18; 

// True 
if (age1 >= 18) {
    console.log("Congratulations! You are allowed.");
}

else {
    console.log("You are not allowed.");
}


// If Else Statement Condition 2
let age2 = 13; 

// False
if (age2 >= 18) {
    console.log("Congratulations! You are allowed.");
}

else {
    console.log("You are not allowed.");
}


// If Else Statement Condition 3 (AND Operator)
let passwordchar = 8;
let password = true; 

if (passwordchar === 9 && password) {
    console.log("Password is strong.");
}

else {
    console.log("Password is weak.");
}


// If Else Statement Condition 4 (OR Operator)
let passwordchara = 4;
let pass = false; 

if (passwordchar <= 9 || pass) {
    console.log("Password is suitable.");
}

else {
    console.log("Try another password.");
}


// If Else Statement Condition 5 (AND & OR Operator)
let day = "monday";
let time = "noon";
let people = 3;

if (day == "monday" && time == "night" || people >= 2) {
    console.log("Ideal time to set our creative team meeting.");
}

else {
    console.log("Let's find a more suitable time.");
}


// If Else Statement Condition 6 
let marks : number = 45; 

if (marks <= 40) {
    console.log("Try Again!");
}

else if (marks <= 60 && marks > 40) {
    console.log("Could Improve!");
}

else if (marks <= 80 && marks > 60) {
    console.log("Above Average Percentile!");
}

else {
    console.log("Excellent!");
}

// Ternary Operators 
let weather : string = "Sunny"; 
console.log(weather === "sunny"? "Good!":"Nope:(");




