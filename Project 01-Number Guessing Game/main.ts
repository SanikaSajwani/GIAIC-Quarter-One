import inquirer from 'inquirer';
const systemGeneratedNo = Math.floor(Math.random()* 10);

type answerType = {
    userGuess: number
}

const answers : answerType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess a random number: "
    }
])

const {userGuess} = answers;

console.log("Random number: " + systemGeneratedNo)
if (userGuess === systemGeneratedNo) {
    console.log("You guessed right!")
} else {
    console.log("Try again!")
}
