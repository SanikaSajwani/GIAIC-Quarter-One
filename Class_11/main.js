"use strict";
/* Class Eleven:
1. Enums
2. Loops
*/
// Enums: Used to store data & also, as a data type
// Example 1
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
let TrafficLight = Color.Red;
console.log(TrafficLight); // Result: 0 (Index Number)
console.log(Color["Yellow"]); // // Result: 1
console.log(Color.Green); // Result: 2
console.log(Color[2]); // Result: Green 
// Loops: Repitition until condition is fulfilled
// Example 2:
// Initializatuon, condition, updation 
for (let i = 0; i < 10; i++) {
    console.log(i + 1 + ". Friday");
}
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// Arrays in loop 
let friends = ["Sanika", "Bari", "Zozo"];
for (let i = 0; i < 3; i++) {
    console.log(friends[i]);
}
let ShoppingList = ["Real Estate", "Helicopter", "Gold biscuit"];
for (let i = 0; i < ShoppingList.length; i++) {
    console.log(`${ShoppingList[i]} is bought.`);
}
// explicit casting
let age;
age = 18;
let firstName = "Zia";
console.log(firstName.length);
