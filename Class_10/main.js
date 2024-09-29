/* Class Ten:
1. Arrays
2. Tuples
3. Data Types (Any, unkown and undefined)
4.
*/
// Arrays 
// Example 1: Simple Syntax Demonstration 
var fruits = ["Apple", "Mango", "Grapes", "Kiwi"]; // Indexes: 0-3
console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 4
fruits[1] = "Orange"; // Assigning Orange to index 1
console.log(fruits[1]); // Output: Orange 
var lengthArray = fruits.push("Strawberry"); // Adding a value at the end of the array
console.log(lengthArray); // Output: 5
var removed = fruits.pop(); // Removing the last value from the array
console.log(removed); // Output: Strawberry 
var add = fruits.unshift("Melon"); // Adding a value at the start of the array
console.log(add); // Output: 5
var remove = fruits.shift(); // Removing the first value from the array
console.log(remove); // Output: Melon
var copy = fruits.slice(1, 3); // Copies the array from index 1 to 2, 3 is explicit  
console.log(copy); // Output: ["Orange", "Grapes"]
var deleteValues = fruits.splice(0, 2); // Start from index 0, deleting 2 indexes 
console.log(deleteValues); // [ 'Apple', 'Orange' ] Deleted Indexes
console.log(fruits); // [ 'Grapes', 'Kiwi' ] Edited Array
fruits.splice(0, 1, "Watermelon"); // Replacing index 0 (Grapes) waith Watermelon
console.log(fruits); // [ 'Watermelon', 'Kiwi' ]
fruits.splice(1, 0, "Avocado"); // Adding Avocado as index 1 
console.log(fruits); // [ 'Watermelon', 'Avocado', 'Kiwi' ]
fruits.splice(0, 0, "Peach", "Berry"); // Adding 2 fruits as index 0 & 1
console.log(fruits); // [ 'Peach', 'Berry', 'Watermelon', 'Avocado', 'Kiwi' ]
// Task 1: 
var FruitBasket1 = ["Apple", "Mango", "Grapes", "Kiwi", "Banana"];
var LastThreeDeletion = FruitBasket1.splice(2, 3);
console.log(LastThreeDeletion); // [ 'Grapes', 'Kiwi', 'Banana' ]
console.log(FruitBasket1); // [ 'Apple', 'Mango' ]
// Task 2:
var FruitBasket2 = ["Apple", "Mango", "Grapes", "Kiwi", "Banana"];
FruitBasket2.splice(4, 1);
FruitBasket2.splice(1, 2);
console.log(FruitBasket2); // [ 'Apple', 'Kiwi' ]
// Task 3:
var FruitBasket3 = ["Apple", "Mango", "Grapes", "Kiwi", "Banana"];
FruitBasket3.splice(2, 2, "Orange", "Strawberry"); // 
console.log(FruitBasket3); // [ 'Apple', 'Kiwi' ]
