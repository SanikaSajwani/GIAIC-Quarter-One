import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more todo?",
            default: false
        }
    ]);
    const { TODO, addMore } = answers;
    console.log(answers);
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add a valid value");
    }
}
if (todos.length > 0) {
    console.log("Your Todo List: ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found.");
}
