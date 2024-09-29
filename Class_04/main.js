/* Class 4:
1. String Concatenation, & Template Liberals
2. Unary Operators
3. Assignment Operators
4. Comparison Operators
5. Logical Operators
*/
// Homework
var weight = 70; // Weight in kg
var height = 2; // Height in meters
var bmi = weight / (Math.pow(height, 2)); // BMI calculation
console.log(bmi); // Output BMI value
var firstName = "Sanika";
var age = 19;
var message1 = "Hello! My name is ".concat(firstName, " and I am ").concat(age, " years old."); //template liberals 
var message2 = "Hello! My name is: " + firstName + " and my age is: " + age + "."; //String Concatenation 
console.log(message1); //Hello! My name is Sanika and I am 19 years old.
console.log(message2); //Hello! My name is: Sanika and my age is: 19.
var num1 = 3;
var num2 = 6;
var num3;
var num4;
// Unary Operators
num3 = ++num1 + num2++; // Increment num1 before adding it to num2; num2 gets incremented after the addition
console.log(num3); // Output: 10
// Output the value of num2 after the arithmetic operation
console.log(num2); // Output: 7
// Homework 
var a = 5;
var b = 2;
var c;
// Calculation = 6 + 6 + 1 + 1 + 7 + 0 + 1 = 22
c = ++a + a++ + --b + b-- + a + b++ + b; // Pre-increment & Post-increment 
console.log(c); //Output: 22
var num5 = 15;
num5 += 5; // Increment num5 by 5 and assign the result back to num5
// Equivalent to: num5 = num5 + 5;
console.log(num5); //Output: 20
num5 -= 5; // Decrement num5 by 5 and assign the result back to num5
// Equivalent to: num5 = num5 - 5;
console.log(num5); //Output: 15
var result1 = a == c; // Comparison Operator (equals to) 
console.log(result1); // False
var result2 = a >= c; // Comparison Operator (greater than and equals to) 
console.log(result2); // False
var result3 = b <= c; // Comparison Operator (lesser than and equals to)
console.log(result3); // True
var result4 = a != c; // Comparison Operator (not equals to) 
console.log(result4); // True
// Logical Operators: Homework 
var a1 = 5;
var b1 = 9;
var logicAND = (a1 > 0) && (b1 > 0); // True
var logicOR = (a1 < 0) || (b1 > 0); // True 
var logicNOT = !(a1 > 0); // False 
console.log(logicAND, logicOR, logicNOT); //true true false 
