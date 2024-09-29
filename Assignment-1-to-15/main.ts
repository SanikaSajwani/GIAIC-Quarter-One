/* 
Q1. Install Node.js, TypeScript and VS Code on your computer/Laptop.

Q2. Personal Message: Store a person’s name in a variable and print a message to them. 

Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let names : string = "Sanika"; 

// Log a message to the console using template literals
console.log(`Hello ${names}, Would you like to learn some Typescript today?`);

// Print a new line for clarity
console.log("\n");

// The `toLowerCase()` method converts all characters in a string to lowercase.
console.log(names.toLowerCase()); 

// The `toUpperCase()` method converts all characters in a string to uppercase.
console.log(names.toUpperCase());

/* This line capitalizes the first character of the string using `toUpperCase()`, 
then appends the lowercase version of the rest of the string using `slice()` and `toLowerCase()`. */
console.log(names.charAt(0).toUpperCase() + names.slice(1).toLowerCase());

// Function to print a horizontal line
function printHorizontalLine(length: number): void {
    let line = "";
    for (let i = 0; i < length; i++) {
        line += "-";
    }
    console.log(line);
}

// Print a horizontal line
printHorizontalLine(20);

/*  
Q4. Famous Quote: Find a quote from a famous person you admire. 
Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

Q5. Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message. 

Q6.  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. 
Then print the name after stripping the white spaces.
*/

// Print a famous quote with author
console.log(`"Marie Curie once said, "One never notices what has been done; one can only see what remains to be done.""`);

// Define a variable for the famous person and the message
let famous_person: string = "Marie Curie";
let message : string = '"Marie Curie once said, "One never notices what has been done; one can only see what remains to be done.""';

// Print the message
console.log(message);

// Print a new line for clarity
console.log("\n");

// Define a variable for the person's name with whitespace
let person_name : string = "\t\n sanika \t\n";

// Print the name with whitespace
console.log(person_name);

// Print the name after stripping whitespace
console.log(person_name.trim());

// Print a horizontal line
printHorizontalLine(20);

/*  
Q7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
Enclose your operations in print statements.

Q8. You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.

Q9. Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. 
Print that message.
*/

// Perform arithmetic operations resulting in 8
console.log(2+6);
console.log(182-174);
console.log(4*2);
console.log(144/18);

// Print a new line for clarity
console.log("\n")

// More arithmetic operations resulting in 8
console.log(104/13);
console.log(200/50*2);
console.log(5+3);
console.log(10-2);

// Print a new line for clarity
console.log("\n");

// Store and print favorite number
let favoriteNumber: number = 1;
console.log(`Here is my favorite number: ${favoriteNumber}.`);

// Print a horizontal line
printHorizontalLine(20);

/* 
Q10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If the programs are straightforward at this point, just add your name and the current date at the top of each program file. 
Then, write one sentence describing what the program does.

Q11. Names: Store the names of a few of your friends in an array called names. 
Print each person’s name by accessing each element in the list, one at a time.

Q12. Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. 
The message should be the same for each person, but personalized with their name.
*/

// Define an array of strings to store friends' names
let friends : string[] = ["Sam", "Charlie", "Blair"];

// Loop through the array using a for loop
for (let i = 0; i < friends.length; i++) {
    // Print each friend's name
    console.log(friends[i]);
}

// Print a new line for clarity
console.log("\n");

// Loop through the array using a for...of loop
for (let friend of friends) {
    // Print a personalized message for each friend using template literals
    console.log(`Hey ${friend}, would you like to attend my birthday party?`); 
}

// Print a horizontal line
printHorizontalLine(20);

/* Day Five: 
Q13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”

Q14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
inviting them to dinner.

Q15. Changing Guest List: One of your guests can't make it to the dinner, 
so you need to send out a new set of invitations with a replacement guest.
*/

// Define an array of strings to store types of transportation
let transportations : string[] = ["Car", "Bike", "Bicycle"];

// Loop through the array using a for...of loop
for (let transportation of transportations) {
    // Print a message using template literals
    console.log(`I would like to own a ${transportation}.`);
}

// Print a new line for clarity
console.log("\n");

// Define an array of strings to store guests' names
let guests : string[] = ["Marie Curie", "Nikola Tesla", "Sylvia Plath"];

// Loop through the array using a for...of loop
for (let guest of guests) {
    // Print a dinner invitation for each guest using template literals
    console.log(`I would like to invite you to dinner, ${guest}.`);
}

// Define a string variable for a guest who is not attending the dinner
let notattending = "Nikola Tesla"; 

// Print a new line for clarity
console.log("\n");

// Print a message indicating the guest who is not attending
console.log(`${notattending} is not attending the dinner.`);

// Print a new line for clarity
console.log("\n");

// Define a string variable for a new guest
let newguest = "Steve Jobs"; 

// Replace the guest who is not attending with the new guest
guests[guests.indexOf(notattending)] = newguest;

// Loop through the updated array of guests
for (let guest of guests) {
    // Print a dinner invitation using template literals
    console.log(`I would like to invite you to dinner, ${guest}.`);
}

// Print a horizontal line
printHorizontalLine(20);