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
// Bank Account Class
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // Debit Money
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. Remaining Balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient Funds");
        }
    }
    // Credit Money
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; // fee charged
        }
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. Balance: ${this.balance}`);
    }
    // Check Balance
    checkBalance() {
        console.log(`Current Balance: ${this.balance}`);
    }
}
// Holders Class
class Holder {
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
// Bank Accounts
const accounts = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1500),
    new BankAccount(1003, 2000),
];
// Bank Account Holders
const holders = [
    new Holder("Jane", "Smith", "Female", 22, 9876543210, accounts[0]),
    new Holder("John", "Doe", "Male", 20, 1234567890, accounts[1]),
    new Holder("Felicity", "Doe", "Female", 22, 123456890, accounts[2]),
];
function service() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            const accountNumberInput = yield inquirer_1.default.prompt({
                name: "accountnumber",
                type: "number",
                message: "Enter Account Number: "
            });
            const holder = holders.find(holder => holder.account.accountNumber === accountNumberInput.accountnumber);
            if (holder) {
                console.log(`Welcome, ${holder.firstName} ${holder.lastName}!\n`);
                const ans = yield inquirer_1.default.prompt({
                    name: "select",
                    type: "list",
                    message: "Select Service: ",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
                });
                switch (ans.select) {
                    case "Deposit":
                        const depositAmount = yield inquirer_1.default.prompt({
                            name: "amount",
                            type: "number",
                            message: "Enter Deposit Amount",
                        });
                        holder.account.deposit(depositAmount.amount);
                        break;
                    case "Withdraw":
                        const WithdrawAmount = yield inquirer_1.default.prompt({
                            name: "amount",
                            type: "number",
                            message: "Enter Withdraw Amount",
                        });
                        holder.account.withdraw(WithdrawAmount.amount);
                        break;
                    case "Check Balance":
                        holder.account.checkBalance();
                        break;
                    case "Exit":
                        console.log("Exiting the program");
                        return;
                }
            }
            else {
                console.log("Invalid bank account number, try again.");
            }
        } while (true);
    });
}
service();
