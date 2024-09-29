"use strict";
/* Assignment One: Write a function checkEvenOdd that accepts a number and print whether
it is even or odd.
*/
function checkEvenOdd(InputNumber) {
    if (InputNumber % 2 === 0) {
        console.log("It is an even number.");
    }
    else {
        console.log("It is an odd number.");
    }
}
checkEvenOdd(8);
checkEvenOdd(11);
/* Assignment Two: Write a function arrayOperations that creates an array of numbers, adds
a number to the end of the array, and removes the first number and middle number, then
print the modified array.
*/
function arrayOperations() {
    let ListOfNumbers = [1, 2, 3, 4, 5];
    ListOfNumbers.push(6); // [1, 2, 3, 4, 5, 6]
    ListOfNumbers.shift(); // [2, 3, 4, 5, 6]
    ListOfNumbers.splice(2, 2); // [2, 3, 6]
    console.log(ListOfNumbers);
}
arrayOperations();
/* Assignment Three: Write a function that multiplies the element of an array by 2 and
returns the modified array.
*/
let ListOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ModifyingArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return ListOfNumbers;
}
;
let result = ModifyingArray(ListOfNumbers);
console.log(result);
/* Assignment Four: Write a function findLargest that accepts an array of numbers and
returns the largest number.
*/
function findLargest(array) {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (largestNumber < array[i]) {
            largestNumber = array[i];
        }
    }
    console.log(largestNumber);
}
let ListOfNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findLargest(ListOfNumbers2);
