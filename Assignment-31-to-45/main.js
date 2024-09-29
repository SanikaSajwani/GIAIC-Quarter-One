/* Day Eleven:

Question 31: No Users: Ensure your user list isn’t empty.
Question 32: Checking Usernames: Ensure uniqueness in usernames.
Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

*/
// Check if the list of users is empty
var users = [];
if (users.length == 0) {
    console.log("List is empty.\n");
}
else {
    // If not empty, greet each user
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log("Hello " + user + "!");
    }
}
// Check uniqueness of usernames
var usernames = ["Harry", "Zayn", "Liam", "Louis", "Niall"];
var new_usernames = ["harry", "Sam", "Taylor", "Olivia"];
new_usernames.forEach(function (new_username) {
    if (usernames.some(function (username) { return username.toLowerCase() === new_username.toLowerCase(); })) {
        console.log("".concat(new_username, " is not available.\n"));
    }
    else {
        console.log("".concat(new_username, " is available.\n"));
    }
});
// Display numbers with ordinal suffixes
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number) {
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
});
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
/* Day Twelve:

Question 34: Pizzas: Share your favorite pizzas and express your love for them.
Question 35: Animals: Highlight animals with a common trait.
Question 36: T-Shirt: Create a function for customizing t-shirts.

*/
// Share favorite pizzas
var favpizzas = ["Pepperoni", "Cheese", "Fajita"];
favpizzas.forEach(function (favpizza) {
    console.log("I love ".concat(favpizza, "\n"));
});
// Highlight animals with a common trait
var favanimals = ["Penguin", "Dog", "Peacock"];
console.log("All three are warm-blooded animals. This means they maintain a constant internal body temperature regardless of the surrounding environment.\n");
favanimals.forEach(function (favanimal) {
    if (favanimal === "Penguin") {
        console.log("Penguins achieve this through thick layers of fat and feathers.\n");
    }
    else if (favanimal === "Dog") {
        console.log("Dogs achieve this with fur and internal physiological processes. \n");
    }
    else {
        console.log("Peacocks achieve this with feathers and similar internal mechanisms.\n");
    }
});
// Create a function for customizing t-shirts
function customShirt(size, print) {
    console.log("Customizable shirt is ready! Size: ".concat(size, ", Message: ").concat(print, "\n"));
}
customShirt(22, "Good day to be sad");
// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);
/* Day Thirteen:

Question 37: Large Shirts: Default values in customized shirts.
Question 38: Cities: Describing cities with a function.
Question 39: City Names: Formatting city-country pairs.

*/
// Define a function for customizable shirts with a default message
function customShirtdefault(size, print) {
    if (print === void 0) { print = "Good day to be sad"; }
    console.log("Customizable shirt is ready! Size: ".concat(size, ", Message: ").concat(print, "\n"));
}
customShirtdefault("Large");
// Describe cities with a function
function cities(city, population, Locate, Size) {
    console.log("Describing ".concat(city, " by population (").concat(population, "), location (").concat(Locate, "), and (").concat(Size, ").\n"));
}
cities("Karachi", "15,478,343", "Pakistan", "3,527 square kilometers");
// Format city-country pairs
function cityCountry(city, country) {
    console.log("".concat(city, ", ").concat(country, "\n"));
}
cityCountry("Karachi", "Pakistan");
cityCountry("Beijing", "China");
// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);
/* Day Forteen:

Question 40: Album: Create objects for music albums.
Question 41: Magicians: Display magician names from an array.
Question 42: Great Magicians: Add "the Great" to magician names.

*/
// Define a function for creating music album objects
function music_albums(artist, name, yearofrelease) {
    console.log(" Albums available in market: \n Artist Name: ".concat(artist, " \n Album Name: ").concat(name, " \n Year of release: ").concat(yearofrelease, " \n\n"));
}
music_albums("Olivia Rodrigo", "Sour", 2021);
music_albums("Tamino", "Amir");
// Display magician names from an array
var magicians = ["Jen Kramer", "Misty Lee", "Fay Presto"];
function display_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log("".concat(magician, "\n"));
    });
}
display_magicians(magicians);
// Add "the Great" to magician names
function great_magicians(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
great_magicians(magicians);
// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);
/* Day Fifteen:

Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
Question 45: Cars: Create detailed car objects with flexible properties.

*/
var great_magicians1 = great_magicians(magicians.slice());
console.log("Original Magicians:\n");
display_magicians(magicians);
console.log("The Great Magicians:\n");
display_magicians(great_magicians1);
// Summarize sandwich orders with varying ingredients
function sandwichOrder() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order: ".concat(items, "\n"));
}
sandwichOrder("Ham");
sandwichOrder("Beef", "Lettuce", "BBQ Sauce");
function car(model, manufacturingYear) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var carproperties = { model: model, manufacturingYear: manufacturingYear };
    properties.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return carproperties[key] = value;
    });
    return carproperties;
}
// Create detailed car objects with flexible properties
console.log(car("Corolla", 2020, ["manufacturer", "Toyota"], ["Color", "Red"]));
// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);
