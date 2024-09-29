/* 

Question 31: No Users: Ensure your user list isn’t empty.
Question 32: Checking Usernames: Ensure uniqueness in usernames.
Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

*/

// Check if the list of users is empty
let users: string[] = [];
if (users.length == 0) {
    console.log("List is empty.\n");
} else {
    // If not empty, greet each user
    for (let user of users) {
        console.log("Hello " + user + "!");
    }
}

// Check uniqueness of usernames
let usernames: string[] = ["Harry", "Zayn", "Liam", "Louis", "Niall"];
let new_usernames: string[] = ["harry", "Sam", "Taylor", "Olivia"];
new_usernames.forEach(new_username => {
    if (usernames.some(username => username.toLowerCase() === new_username.toLowerCase())) {
        console.log(`${new_username} is not available.\n`);
    } else {
        console.log(`${new_username} is available.\n`);
    }
});

// Display numbers with ordinal suffixes
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(number => {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
});
console.log("\n");

// Define a function to print a horizontal line with a given length.
function printHorizontalLine(length: number): void {
    let line = "";
    for (let i = 0; i < length; i++) {
        line += "-";
    }
    console.log(line);
}

// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);

/* 

Question 34: Pizzas: Share your favorite pizzas and express your love for them.
Question 35: Animals: Highlight animals with a common trait.
Question 36: T-Shirt: Create a function for customizing t-shirts.

*/

// Share favorite pizzas
let favpizzas: string[] = ["Pepperoni", "Cheese", "Fajita"];
favpizzas.forEach(favpizza => {
    console.log(`I love ${favpizza}\n`);
});

// Highlight animals with a common trait
let favanimals: string[] = ["Penguin", "Dog", "Peacock"];
console.log("All three are warm-blooded animals. This means they maintain a constant internal body temperature regardless of the surrounding environment.\n");
favanimals.forEach(favanimal => {
    if (favanimal === "Penguin") {
        console.log("Penguins achieve this through thick layers of fat and feathers.\n");
    } else if (favanimal === "Dog") {
        console.log("Dogs achieve this with fur and internal physiological processes. \n");
    } else {
        console.log("Peacocks achieve this with feathers and similar internal mechanisms.\n");
    }
});

// Create a function for customizing t-shirts
function customShirt(size: number, print: string) {
    console.log(`Customizable shirt is ready! Size: ${size}, Message: ${print}\n`);
}
customShirt(22, "Good day to be sad");

// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);

/* 

Question 37: Large Shirts: Default values in customized shirts.
Question 38: Cities: Describing cities with a function.
Question 39: City Names: Formatting city-country pairs.

*/

// Define a function for customizable shirts with a default message
function customShirtdefault(size: number | string, print: string = "Good day to be sad") {
    console.log(`Customizable shirt is ready! Size: ${size}, Message: ${print}\n`);
}
customShirtdefault("Large");

// Describe cities with a function
function cities(city: string, population: number | string, Locate: string, Size: number | string) {
    console.log(`Describing ${city} by population (${population}), location (${Locate}), and (${Size}).\n`);
}
cities("Karachi", "15,478,343", "Pakistan", "3,527 square kilometers");

// Format city-country pairs
function cityCountry(city: string, country: string) {
    console.log(`${city}, ${country}\n`);
}
cityCountry("Karachi", "Pakistan");
cityCountry("Beijing", "China");

// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);

/* 

Question 40: Album: Create objects for music albums.
Question 41: Magicians: Display magician names from an array.
Question 42: Great Magicians: Add "the Great" to magician names.

*/

// Define a function for creating music album objects
function music_albums(artist: string, name: string, yearofrelease?: number) {
    console.log(` Albums available in market: \n Artist Name: ${artist} \n Album Name: ${name} \n Year of release: ${yearofrelease} \n\n`);
}
music_albums("Olivia Rodrigo", "Sour", 2021);
music_albums("Tamino", "Amir");

// Display magician names from an array
let magicians: string[] = ["Jen Kramer", "Misty Lee", "Fay Presto"];
function display_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(`${magician}\n`);
    });
}
display_magicians(magicians);

// Add "the Great" to magician names
function great_magicians(magicians: string[]): string[] {
    return magicians.map(magician => `The Great ${magician}`);
}

great_magicians(magicians);

// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);

/* 

Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
Question 45: Cars: Create detailed car objects with flexible properties.

*/

let great_magicians1: string[] = great_magicians(magicians.slice());
console.log(`Original Magicians:\n`);
display_magicians(magicians);
console.log(`The Great Magicians:\n`);
display_magicians(great_magicians1);

// Summarize sandwich orders with varying ingredients
function sandwichOrder(...items: string[]) {
    console.log(`Sandwich order: ${items}\n`);
}
sandwichOrder("Ham");
sandwichOrder("Beef", "Lettuce", "BBQ Sauce");

function car(model: string, manufacturingYear: number, ...properties: [string, any][]): Object {
    let carproperties = { model, manufacturingYear };
    properties.forEach(([key, value]) => carproperties[key] = value);
    return carproperties;
}

// Create detailed car objects with flexible properties
console.log(car("Corolla", 2020, ["manufacturer", "Toyota"], ["Color", "Red"]));

// Call the function to print a horizontal line with a length of 20 characters.
printHorizontalLine(20);
