import inquirer from "inquirer";

const quiz = await inquirer.prompt([
  {
    name: "question_1", 
    type: "checkbox", 
    message: "Q1. Which of the following are works written by William Shakespeare?",
    choices: ["Hamlet", "Romeo and Juliet", "The Great Gatsby", "Macbeth", "Pride and Prejudice"]
  }, 
  {
    name: "question_2", 
    type: "input", 
    message: "Q2. Who wrote the novel 1984?"
  }, 
  {
    name: "question_3", 
    type: "number", 
    message: "Q3. How many continents are there on Earth?"
  }, 
  {
    name: "question_4", 
    type: "input", 
    message: "Q4. What is the capital city of France?"
  }, 
  {
    name: "question_5", 
    type: "confirm", 
    message: "Do you want to submit the quiz?"
  }, 
]);

let score: number = 0;

if (quiz.question_1.includes("Hamlet") && quiz.question_1.includes("Romeo and Juliet") && quiz.question_1.includes("Macbeth") && 
    !quiz.question_1.includes("The Great Gatsby") && !quiz.question_1.includes("Pride and Prejudice")) {
    score += 1;
}

if (quiz.question_2.trim().toLowerCase() === "george orwell") {
    score += 1;
}

if (quiz.question_3 === 7) {
    score += 1;
}

if (quiz.question_4.trim().toLowerCase() === "paris") {
    score += 1;
}

console.log(`Your final score is: ${score}`);
