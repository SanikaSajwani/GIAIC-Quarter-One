"use strict";
/* Class Nine:
1. Objects (Defining types)
2. Type Alias
3. Type Literals
4. Type Unions
5. Type Intersection
6. Arrays
*/
// Objects
// Example 1: Simple syntax demonstration
let user1 = { name: "Sanika", age: 19 };
console.log(user1.name); // Output: Sanika
console.log(user1["age"]); // Output: 19 (Alternative method of access)
// Example 2: Defining data types in objects
let User = { name: "Sanika", age: 19, role: "Student" };
// Another way to assign values to the User object
User = { name: "Shaaz", age: 23, role: "Student" };
console.log(User);
let user101 = {
    name: "Omera",
    age: 47,
    role: "Housemaker"
};
let user102 = {
    name: "Murad",
    age: 48,
    role: "Assistant Manager"
};
console.log(user101.name);
console.log(user102.age);
