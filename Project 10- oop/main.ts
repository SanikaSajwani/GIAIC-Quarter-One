import inquirer from "inquirer";

class Student {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

class Person {
    students: Student[] = [];

    addStudent(obj: Student): void {
        this.students.push(obj);
    }
}

const persons = new Person();

const start = async (persons: Person): Promise<void> => {
    console.log("Welcome!");

    let exit = false;  // A flag to control the loop

    do {
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Choose to engage: ",
            choices: ["Staff", "Student", "Exit"]
        });

        if (ans.Select === "Staff") {
            console.log("Approach the Staff Room");
        } else if (ans.Select === "Student") {
            const studentAns = await inquirer.prompt({
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
            } else {
                console.log(`Hello! I am ${student.name}.`);
                console.log(`Current Student list: ${persons.students.map(s => s.name).join(", ")}`);
            }
        } else if (ans.Select === "Exit") {
            console.log("Exiting the Program");
            exit = true;  // Set the flag to true to break the loop
        }
    } while (!exit);  // Continue until "Exit" is selected

    console.log("Program Ended.");
};

start(persons);
