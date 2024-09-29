/* Class Ten:
1. Arrays 
2. Tuples
3. Data Types (Any, Unkown and Never)
*/

// Arrays 
// Example 1: Simple Syntax Demonstration 
let fruits = ["Apple", "Mango", "Grapes", "Kiwi"]; // Indexes: 0-3

console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 4

fruits[1] = "Orange"; // Assigning Orange to index 1
console.log(fruits[1]); // Output: Orange 

let lengthArray = fruits.push("Strawberry"); // Adding a value at the end of the array
console.log(lengthArray); // Output: 5
let removed = fruits.pop(); // Removing the last value from the array
console.log(removed); // Output: Strawberry 

let add = fruits.unshift("Melon"); // Adding a value at the start of the array
console.log(add); // Output: 5
let remove = fruits.shift(); // Removing the first value from the array
console.log(remove); // Output: Melon

let copy = fruits.slice(1, 3); // Copies the array from index 1 to 2, 3 is explicit  
console.log(copy); // Output: ["Orange", "Grapes"]

let deleteValues = fruits.splice(0,2); // Start from index 0, deleting 2 indexes 
console.log(deleteValues); // [ 'Apple', 'Orange' ] Deleted Indexes
console.log(fruits); // [ 'Grapes', 'Kiwi' ] Edited Array

fruits.splice(0, 1, "Watermelon"); // Replacing index 0 (Grapes) waith Watermelon
console.log(fruits); // [ 'Watermelon', 'Kiwi' ]
fruits.splice(1, 0, "Avocado"); // Adding Avocado as index 1 
console.log(fruits); // [ 'Watermelon', 'Avocado', 'Kiwi' ]
fruits.splice(0, 0, "Peach", "Berry"); // Adding 2 fruits as index 0 & 1
console.log(fruits); // [ 'Peach', 'Berry', 'Watermelon', 'Avocado', 'Kiwi' ]


// Task 1: Deleting Last Three Elements 
let FruitBasket1 = ["Apple", "Mango", "Grapes", "Kiwi", "Banana"];
FruitBasket1.splice(2,3);
console.log(FruitBasket1); // [ 'Apple', 'Mango' ]

// Task 2: Deleting Banana, Mango, and Grapes
let FruitBasket2 = ["Apple", "Mango", "Grapes", "Kiwi", "Banana"];
FruitBasket2.splice(4,1); 
FruitBasket2. splice(1, 2); 
console.log(FruitBasket2); // [ 'Apple', 'Kiwi' ]

// Task 3: Replacing Mango and Grapes with Orange and Strawberry 
let FruitBasket3 = ["Apple", "Mango", "Grapes", "Kiwi", "Banana"];
FruitBasket3.splice(2, 2, "Orange", "Strawberry"); 
console.log(FruitBasket3); // [ 'Apple', 'Mango', 'Orange', 'Strawberry', 'Banana' ]


// Data Types of Array
let fruit:string[] = ["Apple", "Mango"];
let age:number[] = [1, 15, 27, 28];


// Tuples 
// Example 2: Alloting limits to elements in Arrays
let FruitBasket4:[string, string] = ["Lemon", "Tomato"]; // Can only add 2 elements 
let FruitBasket5:[string, number] = ["Lemon",  5]; 


// Data Types (Any, Unknown, & Never)
// Any: Any thing can be added
let num1: any; 
num1 = 4; // Acceptable 
num1 = true; // Acceptable 
num1 = ["apple", 12]; // Acceptable 
num1.xyz; // Acceptable 
num1 = fruit; // Acceptable 

// Unknown: Don't know the data type at the moment
let num2: unknown;
num2 = 4; // Acceptable 
num2 = true; // Acceptable 
num2 = ["apple", 12]; // Acceptable 

// Never: Imposssible to set the data type 