/* Class Twelve: 
1. Unknown/Any (Revision) & Explicit Casting
2. Rest Parameters
3. Function Overload 
*/

let myvar1: any = "Tayyaba";
myvar1 = 12;
myvar1 = true;

let myvar2: unknown = 12.4;
console.log((myvar2 as number).toFixed(2));
console.log(myvar2);

// Rest Parameters
function all(num1: number, num2: number, ...abc:number[]) {
    console.log(abc); 
}

all (7,9); 

function all1 (...rests:number[]) {
    console.log(rests[0]);
}
all1 (1,2,4,5,6,7)

function sum (...rests: number[]) {
    let sum = 0;
    for (let i = 0; i < rests.length; i++){
        sum += rests [i];
    }
}

sum(1,2,3,4,5,6,8)

console.log()

function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: string): string;
function add(arg1: number, arg2: number): number;
function add(arg1: number): number;
function add(arg1: boolean, arg2: boolean): boolean;

function add(arg1: any, arg2?: any): any {
    return arg1 + arg2;
}

add (1, "string")
// void: no return 

// sign in with google (function overload) assignment, log in overload and function 
// title case let firstname = "Hamzah", index, slice, result: "Hamzah", 
// hamzah, result: Hamzah

let names = "sanika";
let firstChar = names[0];
let output1 = firstChar.toUpperCase();
let output2 = names.slice(1);
console.log(output1+output2);