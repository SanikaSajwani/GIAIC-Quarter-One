/* Class Nine:
1. Objects (Defining types, Nested Objects) 
2. Type Alias 
3. Type Literals 
4. Type Unions
5. Type Intersection 
*/

// Objects
// Example 1: Simple syntax demonstration
let user1 = { name: "Sanika", age: 19}

console.log(user1.name); // Dot Notation, Output: Sanika
console.log(user1["age"]); // Output: 19 (Alternative method of access)

// Example 2: Defining data types in objects
let User: {name: string; age: number; role: string; } = { name: "Sanika", age: 19, role: "Student"}

// Another way to assign values to the User object
User = {name: "Shaaz", age: 23, role: "Student" };

console.log(User); // Output: { name: 'Shaaz', age: 23, role: 'Student' }


// Type Alias
// Example 3: Assigning data types with Type Alias
type Users = { name: string, age: number, role: string}

let user101: Users = { name: "Omera",  age: 47, role: "Housemaker"}
let user102: Users = { name: "Murad", age: 48, role: "Assistant Manager"}

console.log(user101.name); // Output: Omera
console.log(user102.age); // Output: 48


// Nested Objects
// Example 4: Syntax of Nested Objects
type FamilyTree = { name: string, yearOfBirth: number, Parent: { ParentName: string, ParentAge: number }}

let FamilyTree1 : FamilyTree = { name: "Arsh", yearOfBirth: 2009, Parent: {ParentName: "Farooq", ParentAge: 45 }}

console.log(FamilyTree1.Parent.ParentName); // Output: Farooq

// Task: Define a type alias for Student objects (Grade 9)
type Students_of_9 = {name: string, grades_of_8: number, interests: {interest1: string, interest2: string}} 

let RollNo1 : Students_of_9 = {name: "Eishal", grades_of_8: 79, interests: {interest1: "Chess", interest2: "Football"}}

console.log(RollNo1.interests.interest1);

// Type Literals 
// Example 5: 
let trafficLights: "Red" | "Yellow" | "Green";
// trafficLights = "blue"; invalid
trafficLights = "Red" // valid 

// Type Union
// Example 6: 
let age: string | number = "eighteen"; 

// Type Intersection
// Example 7:
type Student = { name: string, rollNumber: number}
let student1: Student = { name: "Shiza", rollNumber: 10789}
type Teacher = { name: string, subject: string}
let teacher1: Teacher = { name: "Shiza", subject: "English"}

let Pair1: Teacher & Student = { name: "Ahmad", rollNumber: 12345, subject: "English" } 

