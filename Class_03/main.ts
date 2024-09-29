/* Class Three
1. Printing with console.log
2. Variables & Updating the Variables 
3. Data Interfaces
4. Declaration of Variables: Var, Const & Let
5. Concatenating strings
*/

// Print a welcome message to the console
console.log("Class Three"); 

// Declare and initialize a variable 'b' with the value "biryani"
let b: string = "biryani";
// Print the value of variable 'b'
console.log("Variable 'b':", b);

// Update the value of variable 'b' to "ring"
b = "ring";
// Print the updated value of variable 'b'
console.log("Updated Variable 'b':", b);

// Declare and initialize a variable 'food' with the value "variable2"
let food: string = "variable2"; // Choose a more descriptive variable name than "food"

// Demonstrate the different ways of declaring variables: var, let, const
// 'var' is a legacy keyword, consider using 'let' or 'const' instead for block-scoped variables
// 'let' allows variable reassignment, while 'const' creates a constant value
console.log("Variable 'food' declared with let:", food);

var varVariable: string = "varVariable"; // Declaring a variable with 'var'
console.log("Variable 'varVariable' (var):", varVariable);

// Declare a constant variable 'a' with the value "variable3"
const a: string = "variable3";
// Attempting to update the value of a constant variable will result in an error
// 'const' variables cannot be reassigned
// a = "new value"; // Uncommenting this line will result in a TypeScript error

// Print the value of constant variable 'a'
console.log("Constant Variable 'a':", a);

// Declare and initialize variables of different data types
let str: string = "Hello"; // String variable
let num: number = 42; // Number variable
let bool: boolean = true; // Boolean variable
let anyVar: any = "Any value"; // 'any' variable (can hold any type of value)

// Print variables along with their respective data types
console.log("String Variable 'str':", str, "(Type:", typeof str + ")");
console.log("Number Variable 'num':", num, "(Type:", typeof num + ")");
console.log("Boolean Variable 'bool':", bool, "(Type:", typeof bool + ")");
console.log("Any Variable 'anyVar':", anyVar, "(Type:", typeof anyVar + ")");

// Define a type interface for a person
interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
}

// Declare and initialize variables using type interface and strong typing
let person: Person = {
    name: "Sanika",
    age: 19,
    isDeveloper: true
};

// Print details of the person
console.log("Person Details:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is Developer:", person.isDeveloper ? "Yes" : "No");

let greeting: string = "Hello";
let names: string = "John";
let message: string = greeting + ", " + name + "!"; // Concatenating strings
console.log(message); // Output: Hello, John!

let num10: number = 10;
let num20: number = 20;
let sum: number = num10 + num20; // Concatenating numbers
console.log("The sum of " + num10 + " and " + num20 + " is: " + sum); // Output: The sum of 10 and 20 is: 30

//string + number = string
let nu1= "1";
let nu2= 1;
console.log(nu1 + nu2);






























