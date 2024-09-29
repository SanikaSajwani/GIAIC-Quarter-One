/* Day Six:
Q16. More Guests: You've found a bigger dinner table, so there's room for more guests.

Q17. Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

Q18. Seeing the World: Think of at least five places you’d like to visit. (Ordering it)
*/
// Define an array of strings to store guests' names
var guests = ["Nikola Tesla", "Marie Curie", "Steve Jobs", "Sylvia Plath"];
// Log the initial list of guests to the console
console.log(guests);
console.log("\n");
// Inform about finding a bigger table
console.log("Found a bigger table!");
console.log("\n");
// Add a new guest at index 4 (5th position) in the array
guests[4] = "Ada Lovelace";
// Log the updated list of guests to the console
console.log(guests);
console.log("\n");
// Add a new guest to the end of the array using the push() method
guests.push("Stephan Hawking");
// Log the updated list of guests to the console
console.log(guests);
console.log("\n");
// Add a new guest at index 6 (7th position) in the array using the splice() method
guests.splice(6, 0, "Aristotle");
// Log the updated list of guests to the console
console.log(guests);
console.log("\n");
// Inform about the limitation on the number of guests that can be invited to the dinner
console.log("Unfortunately, I can only invite 3 people to the dinner.");
console.log("\n");
// Reduce the length of the guests array to accommodate the limitation
guests.length = 3;
// Loop through the remaining guests and inform them that they are still invited to the dinner
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("".concat(guest, ", You are still invited to the dinner"));
}
// Print a new line for clarity
console.log("\n");
// Define an array of strings to store places
var places = ["Sahara Dessert", "Kenya", "Quwait", "New Zealand", "Malaysia"];
// Log the original order of places
console.log("Original order: " + places);
// Print a new line for clarity
console.log("\n");
// Reverse the order of elements in the places array
places.reverse();
// Log the reversed order of places
console.log("Reversed order: " + places);
// Print a new line for clarity
console.log("\n");
// Sort the elements of the places array in alphabetical order
places.sort();
// Log the elements of the places array in alphabetical order
console.log("Alphabetic order: " + places);
// Print a new line for clarity
console.log("\n");
// Sort the elements of the places array in alphabetical order and then reverse the order
places.sort().reverse();
// Log the elements of the places array in reverse alphabetical order
console.log("Reversed alphabetic order: " + places);
// Print a new line for clarity
console.log("\n");
// Define a function to print a horizontal line with a given length.
function printHorizontalLine(length) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += "-";
    }
    console.log(line);
}
// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);
/* Day Seven:
Q19. Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating
the number of people you are inviting to dinner.

Q20. Think of something you could store in an array.
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.

Q21. Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
// Print the number of guests invited to dinner
console.log("I am inviting ".concat(guests.length, " people to dinner."));
// Print a new line for clarity
console.log("\n");
// Define an array of strings to store languages
var languages = ["English", "Urdu", "French", "Spanish"];
// Log the languages known to the console
console.log("Languages I know: " + languages);
// Print a new line for clarity
console.log("\n");
var Person = {
    names: "Sanika",
    gender: "Female",
    age: 19
};
console.log("Name: ".concat(Person.names, ", Gender: ").concat(Person.gender, ", Age: ").concat(Person.age));
// Print a new line for clarity
console.log("\n");
// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);
/* Day Eight:
Q22. Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

Q23. Conditional Tests: Write a series of conditional tests. Predict the results of each test.

Q24. More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
*/
var numbers = [1, 2, 3, 4, 5];
// Intentionally trying to access an element at an index that doesn't exist
console.log(numbers[7]); // This will produce an array index error
// To correct the error, we can check if the index is within the bounds of the array
if (numbers.length > 7) {
    console.log(numbers[7]); // Accessing the element at index 10
}
else {
    console.log("Index out of bounds"); // If the index is out of bounds, handle the error gracefully
}
// Print a new line for clarity
console.log("\n");
var x = 10;
var y = 5;
// Test 1: Is x greater than y?
console.log("Test 1:", x > y); // Prediction: true (10 is greater than 5)
// Test 2: Is y greater than x?
console.log("Test 2:", y > x); // Prediction: false (10 is lesser than 5)
// Test 3: Is x equal to y?
console.log("Test 3:", x === y); // Prediction: false (10 is not equal to 5)
// Test 4: Is x not equal to y?
console.log("Test 4:", x !== y); // Prediction: true (10 is not equal to 5)
// Test 5: Is x + y equal to y + x?
console.log("Test 5:", x + y === y + x); // Prediction: true (addition is commutative, so x + y equals y + x)
// Test 6: Is x - y equal to y - x?
console.log("Test 6:", x - y === y - x); // Prediction: false (subtraction is not commutative, so x - y does not equals y - x)
// Test 7: Is x multiplied by y greater than y multiplied by x?
console.log("Test 7:", x * y > y * x); // Prediction: false (multiplication is commutative, so x * y equals y * x)
// Test 8: Is x divided by y equal to y divided by x?
console.log("Test 8:", x / y !== y / x); // Prediction: true (division is not commutative)
// Test 9: Is x raised to the power of y greater than y raised to the power of x?
console.log("Test 9:", Math.pow(x, y) > Math.pow(y, x)); // Prediction: false
// Test 10: Is y raised to the power of x greater than x raised to the power of y?
console.log("Test 10:", Math.pow(y, x) > Math.pow(x, y)); // Prediction: true
// Print a new line for clarity
console.log("\n");
// Test 11: Equality with strings
var car = "Tesla";
console.log("Test 11:", car == "Tesla"); //true
// Test 12: Using the lower case function
var car1 = "TESLA";
console.log("Test 12:", car1.toLowerCase() == "tesla"); //true
// Test 13: Tests using "and" and "or" operators
console.log("Test 13:", car1.toLowerCase() == car.toLowerCase() && true); //true
// Test 14: Test whether an item is in array
var items = ["Tablet", "Phone", "Laptop"];
console.log("Test 14:", items.indexOf("Tablet") !== -1); // true
// Test 15: Test whether an item is not in array
console.log("Test 15:", items.indexOf("Charger") !== -1); // false
// Print a new line for clarity
console.log("\n");
// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);
/* Day Nine:
Q25. Alien Colors #1: Imagine an alien was just shot down in a game.
Assign 'green', 'yellow', or 'red' to a variable called alien_color.

Q26. Alien Colors #2: Choose a color for an alien, then write an if-else chain.

Q27. Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
*/
// Define a variable to store the color of the alien
var alien_color = "green";
// Check if the alien color is green
if (alien_color == "green") {
    // If true, print a message indicating the player has earned 10 points
    console.log("Congratulations! You have earned 10 points.");
}
else {
    // If false, print a message to try again
    console.log("Try again!");
}
// Print a new line for clarity
console.log("\n");
// Check the color of the alien with multiple conditions
if (alien_color == "green") {
    // If the alien color is green, print a message indicating the player has earned 10 points
    console.log("Congratulations! You have earned 10 points.");
}
else if (alien_color == "yellow") {
    // If the alien color is yellow, print a message indicating the alien is injured
    console.log("Alien is injured.");
}
else if (alien_color == "red") {
    // If the alien color is red, print a message to try again
    console.log("Try Again!");
}
/* Day Ten:
Q28. Stages of Life: Determine a person’s life stage with an if-else chain.

Q29. Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

Q30. Hello Admin: Greet users differently, especially 'admin'.
*/
// Define a variable to store the age of the person
var age = 39;
// Check the age of the person and print the corresponding life stage
if (age > 2) {
    // If age is greater than 2, the person is in infancy
    console.log("Infancy");
}
else if (age > 6) {
    // If age is greater than 6, the person is in early childhood
    console.log("Early Childhood");
}
else if (age > 11) {
    // If age is greater than 11, the person is in middle childhood
    console.log("Middle Childhood");
}
else if (age >= 18) {
    // If age is greater than or equal to 18, the person is in adolescence
    console.log("Adolescence");
}
else if (age > 40) {
    // If age is greater than 40, the person is in early adulthood
    console.log("Early Adulthood");
}
else if (age > 65) {
    // If age is greater than 65, the person is in middle adulthood
    console.log("Middle Adulthood");
}
else if (age > 100) {
    // If age is greater than 100, the person is in late adulthood
    console.log("Late Adulthood");
}
// Print a new line for clarity
console.log("\n");
// Define an array of strings to store favourite fruits
var fruits = ["Banana", "Apple", "Strawberry"];
// Test whether "Banana" is in the array
console.log("Do you like Banana?", fruits.indexOf("Banana") !== -1);
// Test whether "Cherries" is in the array
console.log("Do you like Cherries?", fruits.indexOf("Cherries") !== -1);
// Print a new line for clarity
console.log("\n");
var users = ["user1", "user2", "user3", "admin"];
users.forEach(function (user) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
});
