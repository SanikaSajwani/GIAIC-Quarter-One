import inquirer from "inquirer";
const ID = Math.floor(10000 * Math.random());
let Balance = 0;
let StudentNames = await inquirer.prompt([
    {
        name: "Students",
        type: "input",
        message: "Enter Student Name: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a valid value.";
        }
    },
    {
        name: "Courses",
        type: "list",
        message: "Select the Course:",
        choices: ["Engineering Drawing", "Applied Physics", "Applied Calculus", "Civics and Community Engagement", "English Language", "Applications of ICT", "Ethics", "Islamiyat"]
    }
]);
const tutionfee = {
    "Engineering Drawing": 10000,
    "Applied Physics": 15000,
    "Applied Calculus": 7000,
    "Civics and Community Engagement": 6000,
    "English Language": 6000,
    "Applications of ICT": 15000,
    "Ethics": 5000,
    "Islamiyat": 5000
};
console.log(`\nTution Fee: ${tutionfee[StudentNames.Courses]}`);
console.log(`\nBalance: ${Balance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: "Select the Payment Method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "Amount",
        type: "input",
        message: "Kindly Transfer Money: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a value.";
        }
    }
]);
console.log(`\nSelected Payement Method: ${paymentType.Payment} \nTransfer Amount: ${paymentType.Amount}`);
let tutionfees = tutionfee[StudentNames.Courses];
const paymentAmount = parseFloat(paymentType.Amount);
if (tutionfees <= paymentAmount) {
    console.log(`You are successfully enrolled in ${StudentNames.Courses}. \n`);
    let ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.Select === "View Status") {
        console.log("***********Status***********");
        console.log(`Student Name: ${StudentNames.Students}`);
        console.log(`Student ID: ${ID}`);
        console.log(`Course: ${StudentNames.Courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        Balance = paymentAmount - tutionfees;
        console.log(`Balance: ${Balance}`);
    }
    else {
        console.log("\nExiting Student Management System.");
    }
}
else {
    console.log("Insufficient Funds.");
}
