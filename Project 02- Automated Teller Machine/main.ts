import inquirer from 'inquirer';

interface inputType {
    userID: string,
    userPin: number, 
    accountType: string, 
    transactionType: string, 
    amount: number
}

const input : inputType = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Insert your User ID: ",
        validate: function (value: string) {
            if (value === "4444") {
                return true;
            } else {
            return 'Incorrect User ID';
            }
        }
    }, 
    {
        type: "number",
        name: "userPin",
        message: "Insert your User Pin: ", 
        
    }, 
    {
        type: "list",
        name: "accountType", 
        choices: ["Saving", "Current"],
        message: "Choose your Account Type: ",
    },
    {
        type: "list",
        name: "transactionType", 
        choices: ["Fast Cash", "Withdraw"],
        message: "Choose your Transaction Type: ",
        when (input) {
            return input.accountType
        }
    },
    {
        type: "list",
        name: "amount", 
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount: ",
        when (input) {
            return input.transactionType == "Fast Cash";
        }
    }, 
    {
    type: "number", 
    name: "amount",
    message: "Enter your amount", 
    when (input) {
        return input.transactionType == "Withdraw";
    }
    }
]);

if (input.userID && input.userPin) {
    const balance = Math.floor(Math.random() * 100000);
    console.log(`Your balance: ${balance}`);
    const amountRequested = input.amount;
    if (balance >= amountRequested) {
        const currentBalance = balance - amountRequested;
        console.log("Your current balance: " + currentBalance);
    } else {
        console.log("Insufficient Funds");
    }
}

