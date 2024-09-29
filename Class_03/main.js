// Print a welcome message to the console, emphasizing the title in bold
console.log("Welcome to My Coding Portfolio!");
// Print a detailed description of the project and its objectives
console.log("Hello and welcome to my coding portfolio. In this project, labeled 'Project 00,' I've introduced fundamental concepts such as printing messages, declaring variables, and manipulating their values. This serves as a foundational exploration into programming concepts, setting the stage for more complex projects ahead. In this updated version, I've incorporated type interfaces and strong typing to ensure robust data structures, along with organizing the code into multiple lines for better readability and maintainability. Explore and enjoy!");
// Declare and initialize a variable 'b' with the value "biryani"
var b = "biryani";
// Print the value of variable 'b'
console.log("Variable 'b':", b);
// Update the value of variable 'b' to "ring"
b = "ring";
// Print the updated value of variable 'b'
console.log("Updated Variable 'b':", b);
// Declare and initialize a variable 'food' with the value "variable2"
var food = "variable2"; // Choose a more descriptive variable name than "food"
// Demonstrate the different ways of declaring variables: var, let, const
// 'var' is a legacy keyword, consider using 'let' or 'const' instead for block-scoped variables
// 'let' allows variable reassignment, while 'const' creates a constant value
console.log("Variable 'food' declared with let:", food);
var varVariable = "varVariable"; // Declaring a variable with 'var'
console.log("Variable 'varVariable' (var):", varVariable);
// Declare a constant variable 'a' with the value "variable3"
var a = "variable3";
// Attempting to update the value of a constant variable will result in an error
// 'const' variables cannot be reassigned
// a = "new value"; // Uncommenting this line will result in a TypeScript error
// Print the value of constant variable 'a'
console.log("Constant Variable 'a':", a);
// Declare and initialize variables of different data types
var str = "Hello"; // String variable
var num = 42; // Number variable
var bool = true; // Boolean variable
var anyVar = "Any value"; // 'any' variable (can hold any type of value)
// Print variables along with their respective data types
console.log("String Variable 'str':", str, "(Type:", typeof str + ")");
console.log("Number Variable 'num':", num, "(Type:", typeof num + ")");
console.log("Boolean Variable 'bool':", bool, "(Type:", typeof bool + ")");
console.log("Any Variable 'anyVar':", anyVar, "(Type:", typeof anyVar + ")");
// Declare and initialize variables using type interface and strong typing
var person = {
    name: "Sanika",
    age: 19,
    isDeveloper: true
};
// Print details of the person
console.log("Person Details:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is Developer:", person.isDeveloper ? "Yes" : "No");
var greeting = "Hello";
var names = "John";
var message = greeting + ", " + name + "!"; // Concatenating strings
console.log(message); // Output: Hello, John!
var num10 = 10;
var num20 = 20;
var sum = num10 + num20; // Concatenating numbers
console.log("The sum of " + num10 + " and " + num20 + " is: " + sum); // Output: The sum of 10 and 20 is: 30
//string + number = string
var nu1 = "1";
var nu2 = 1;
console.log(nu1 + nu2);
//arithmetic operators
//Class 4
var firstName1 = "Shaaz";
var age1 = 23;
var message1 = "Hello! My name is ".concat(firstName1, " and I am ").concat(age1, " years old.");
var message2 = "Hello! My name is: " + firstName1 + " and my age is: " + age1;
console.log(message1);
console.log(message2);
