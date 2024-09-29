/* Class six:
1. If Else Statements
2. Conditional Statements
*/
// If Else Statement Condition 1
var age1 = 18;
// True 
if (age1 >= 18) {
    console.log("Congratulations! You are allowed.");
}
else {
    console.log("You are not allowed.");
}
// If Else Statement Condition 2
var age2 = 13;
// False
if (age2 >= 18) {
    console.log("Congratulations! You are allowed.");
}
else {
    console.log("You are not allowed.");
}
// If Else Statement Condition 3 (AND Operator)
var passwordchar = 8;
var password = true;
if (passwordchar === 9 && password) {
    console.log("Password is strong.");
}
else {
    console.log("Password is weak.");
}
// If Else Statement Condition 4 (OR Operator)
var passwordchara = 4;
var pass = false;
if (passwordchar <= 9 || pass) {
    console.log("Password is suitable.");
}
else {
    console.log("Try another password.");
}
// If Else Statement Condition 5 (AND & OR Operator)
var day = "monday";
var time = "noon";
var people = 3;
if (day == "monday" && time == "night" || people >= 2) {
    console.log("Ideal time to set our creative team meeting.");
}
else {
    console.log("Let's find a more suitable time.");
}
// If Else Statement Condition 6 
var marks = 45;
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
var weather = "Sunny";
console.log(weather === "sunny" ? "Good!" : "Nope:(");
