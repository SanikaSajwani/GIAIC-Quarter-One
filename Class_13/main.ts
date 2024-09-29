/* Class Thirteen:
1. Narrowing
2. Null
3. Structural Typing
*/

// Narrowing 
// Narrowing refers to refining or minimizing types using certain conditions. 
// Example 1
let age: number | string; // Type union of number & string
age = 18.9; // assigning a number
// Narrowing multiple data types to one

let x = age.toString(); // using method of a number type  
console.log(`${x} years old!`);
let y = age.toFixed(0); // using method of a number type  
console.log(y); 

// Example 2
let ages: number | string; // Type union of number & string
ages = '18'; // assigning a string
console.log(typeof ages); // Result: string 
console.log(typeof ages == "string"); // Result: true 
 
// Example 3
// Generate a random number between 0 and 100, then format it to 1 decimal place and print it
console.log(((Math.random())*100).toFixed(1));

// Use a ternary operator to assign a value to firstName
// If Math.random() > 0.6, assign "Sam" to firstName, otherwise assign 17
let firstName = Math.random() > 0.6? "Sam" : 17;

if (typeof firstName == "string") {
    console.log(`String: ${firstName}`); // narrowed to string
} else {
    console.log(`Number: ${firstName}`); // narrowed to number 
}

// Null 
// Example 4
let age1: null = null;  // 'age1' is explicitly set to null

// Structural Typing
// Example 5
// Define an interface 'Student' with properties 'name' and 'age'
interface Address {
    city: string;
    state: string;
}

interface Student {
    name: string;
    age: number;
    address: Address;
}

// Create an object 'Student1' that adheres to the 'Student' interface
let Student1: Student = {
    name: "Sanika",
    age: 19,
    address: {
        city: "Karachi",
        state: "Sindh"
    }
}

// 'Student1' has the same structure as the 'Student' interface
console.log(Student1);  // Outputs: { name: 'Sanika', age: 19, address: { city: 'Karachi', state: 'Sindh' }}

// Example 6
interface table1 {
    food: string, 
    drink: string | null,
}
interface table2 {
    food: string,
    drink: string | null,
}

let customer1: table1 = {
    food: "Mac and Cheese",
    drink: null
}

let customer2: table2 = {
    food: "Fried Rice",
    drink: "Limca",
}

let customer3: table1 = customer1 

// Stale object & fresh object 
// Allowing extra property & not allowing extra property 
