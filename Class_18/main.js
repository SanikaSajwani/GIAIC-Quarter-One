/* Class 18:
 Modules:
   - Commonjs uses the require function to import modules
   - ECMAScript modules (ES Module) uses the import statement
 
In tscconfig.json file:
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
In package.json file:
    "type": "module",
*/
import { num1 as number } from "./Operations/Addition.js";
console.log(number);
import subtraction from "./Operations/Subtraction.js";
console.log(subtraction(6, 3));
