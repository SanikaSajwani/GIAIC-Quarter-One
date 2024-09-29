import inquirer from "inquirer";

let Conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};

const answer: {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount: "
    }
]);

const { from, to, amount } = answer;

if (from && to && amount) {
    let result = Conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}.`);
} else {
    console.log("Invalid Inputs.");
}
