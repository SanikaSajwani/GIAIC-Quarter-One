/* Class 4: 
1. String Concatenation, & Template Liberals
2. Unary Operators
3. Assignment Operators
4. Comparison Operators 
5. Logical Operators
*/

// Homework
let weight: number = 70; // Weight in kg
let height: number = 2;  // Height in meters

let bmi = weight / (height ** 2); // BMI calculation
console.log(bmi); // Output BMI value


let firstName: string = "Sanika"; 
let age: number = 19;             

let message1 = `Hello! My name is ${firstName} and I am ${age} years old.`; //template liberals 
let message2 = "Hello! My name is: " + firstName + " and my age is: " + age + "."; //String Concatenation 

console.log(message1); //Hello! My name is Sanika and I am 19 years old.
console.log(message2); //Hello! My name is: Sanika and my age is: 19.


let num1: number = 3; 
let num2: number = 6; 
let num3: number;     
let num4: number;     

// Unary Operators
num3 = ++num1 + num2++; // Increment num1 before adding it to num2; num2 gets incremented after the addition

console.log(num3); // Output: 10
// Output the value of num2 after the arithmetic operation
console.log(num2); // Output: 7


// Homework 
let a: number = 5;
let b: number = 2;
let c: number;

// Calculation = 6 + 6 + 1 + 1 + 7 + 0 + 1 = 22
c = ++a + a++ + --b + b-- + a + b++ + b; // Pre-increment & Post-increment 
console.log(c); //Output: 22


let num5 : number = 15; 
num5 +=5; // Increment num5 by 5 and assign the result back to num5
// Equivalent to: num5 = num5 + 5;
console.log(num5); //Output: 20

num5 -=5; // Decrement num5 by 5 and assign the result back to num5
// Equivalent to: num5 = num5 - 5;
console.log(num5); //Output: 15


let result1 = a == c; // Comparison Operator (equals to) 
console.log(result1); // False

let result2 = a >= c; // Comparison Operator (greater than and equals to) 
console.log(result2); // False

let result3 = b <= c; // Comparison Operator (lesser than and equals to)
console.log(result3); // True

let result4 = a != c; // Comparison Operator (not equals to) 
console.log(result4); // True


// Logical Operators: Homework 
let a1 = 5; 
let b1 = 9; 

let logicAND = (a1 > 0) && (b1 > 0); // True
let logicOR = (a1 < 0) || (b1 > 0); // True 
let logicNOT = !(a1 > 0);  // False 

console.log(logicAND, logicOR, logicNOT); //true true false 



















