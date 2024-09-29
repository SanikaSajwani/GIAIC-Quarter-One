/* Class Twelve:
1. Unknown/Any (Revision) & Explicit Casting
2. Rest Parameters
3. Function Overload
*/
var myvar1 = "Tayyaba";
myvar1 = 12;
myvar1 = true;
var myvar2 = 12.4;
console.log(myvar2.toFixed(2));
console.log(myvar2);
// Rest Parameters
function all(num1, num2) {
    var abc = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        abc[_i - 2] = arguments[_i];
    }
    console.log(abc);
}
all(7, 9);
function all1() {
    var rests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rests[_i] = arguments[_i];
    }
    console.log(rests[0]);
}
all1(1, 2, 4, 5, 6, 7);
function sum() {
    var rests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rests[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < rests.length; i++) {
        sum += rests[i];
    }
}
sum(1, 2, 3, 4, 5, 6, 8);
console.log();
function add(arg1, arg2) {
    return arg1 + arg2;
}
add(1, "string");
// void: no return 
// sign in with google (function overload) assignment, log in overload and function 
// title case let firstname = "Hamzah", index, slice, result: "Hamzah", 
// hamzah, result: Hamzah
var names = "sanika";
var firstChar = names[0];
var output1 = firstChar.toUpperCase();
var output2 = names.slice(1);
console.log(output1 + output2);
