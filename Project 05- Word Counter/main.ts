import inquirer from "inquirer";

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your paragraph: "
    }
]);

const words = answers.Sentence.trim().split(" "); 
console.log(`Word Count: ${words.length}`); 