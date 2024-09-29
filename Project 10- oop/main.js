"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const start = (persons) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Welcome!");
    let exit = false; // A flag to control the loop
    do {
        const ans = yield inquirer_1.default.prompt({
            name: "Select",
            type: "list",
            message: "Choose to engage: ",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.Select === "Staff") {
            console.log("Approach the Staff Room");
        }
        else if (ans.Select === "Student") {
            const studentAns = yield inquirer_1.default.prompt({
                name: "Student",
                type: "input",
                message: "Enter Student's Name: "
            });
            const student = persons.students.find(val => val.name === studentAns.Student);
            if (!student) {
                const name = new Student(studentAns.Student);
                persons.addStudent(name);
                console.log(`Hello! I am ${name.name}.`);
                console.log(`\nNew Student Added.`);
                console.log(`New Student list: ${persons.students.map(s => s.name).join(", ")}`);
            }
            else {
                console.log(`Hello! I am ${student.name}.`);
                console.log(`Current Student list: ${persons.students.map(s => s.name).join(", ")}`);
            }
        }
        else if (ans.Select === "Exit") {
            console.log("Exiting the Program");
            exit = true; // Set the flag to true to break the loop
        }
    } while (!exit); // Continue until "Exit" is selected
    console.log("Program Ended.");
});
start(persons);
