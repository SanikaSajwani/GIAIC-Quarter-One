import inquirer from "inquirer";

interface IBankAccount {
    accountNumber: number;
    balance: number;
    withdraw(amount: number): void;
    deposit(amount: number): void;
    checkBalance(): void;
}

// Bank Account Class
class BankAccount implements IBankAccount {
    accountNumber: number;
    balance: number;

    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Debit Money
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. Remaining Balance: ${this.balance}`);
        } else {
            console.log("Insufficient Funds");
        }
    }

    // Credit Money
    deposit(amount: number): void {
        if (amount > 100) {
            amount -= 1; // fee charged
            console.log(`Fee of 1 deducted for deposits over 100.`);
        }
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. Balance: ${this.balance}`);
    }

    // Check Balance
    checkBalance(): void {
        console.log(`Current Balance: ${this.balance}`);
    }
}

// Holders Class
class Holder {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    mobileNumber: number;
    account: BankAccount;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: number, account: BankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}

// Bank Accounts
const accounts: BankAccount[] = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1500),
    new BankAccount(1003, 2000),
];

// Bank Account Holders
const holders: Holder[] = [
    new Holder("Jane", "Smith", "Female", 22, 9876543210, accounts[0]),
    new Holder("John", "Doe", "Male", 20, 1234567890, accounts[1]),
    new Holder("Felicity", "Doe", "Female", 22, 1234567891, accounts[2])
];

async function service() {
    let exit = false; // Flag to control exit from the loop
    do {
        const accountNumberInput = await inquirer.prompt({
            name: "accountnumber",
            type: "input",  
            message: "Enter Account Number: "
        });

        const accountNumber = parseInt(accountNumberInput.accountnumber);
        if (isNaN(accountNumber)) {
            console.log("Invalid input. Please enter a valid number.");
            continue;
        }

        const holder = holders.find(holder => holder.account.accountNumber === accountNumber);

        if (holder) {
            console.log(`Welcome, ${holder.firstName} ${holder.lastName}!\n`);
            const ans = await inquirer.prompt({
                name: "select",
                type: "list",
                message: "Select Service: ",
                choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
            });

            switch (ans.select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "input",  
                        message: "Enter Deposit Amount",
                    });

                    const depositAmountNumber = parseFloat(depositAmount.amount);
                    if (isNaN(depositAmountNumber) || depositAmountNumber <= 0) {
                        console.log("Invalid deposit amount. Please enter a valid number.");
                    } else {
                        holder.account.deposit(depositAmountNumber);
                    }
                    break;

                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "input",  
                        message: "Enter Withdraw Amount",
                    });

                    const withdrawAmountNumber = parseFloat(withdrawAmount.amount);
                    if (isNaN(withdrawAmountNumber) || withdrawAmountNumber <= 0) {
                        console.log("Invalid withdraw amount. Please enter a valid number.");
                    } else {
                        holder.account.withdraw(withdrawAmountNumber);
                    }
                    break;

                case "Check Balance":
                    holder.account.checkBalance();
                    break;

                case "Exit":
                    console.log("Exiting the program");
                    exit = true;
                    break;
            }
        } else {
            console.log("Invalid bank account number, try again.");
        }
    } while (!exit); 
}

service();
