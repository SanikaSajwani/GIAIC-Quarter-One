import inquirer from "inquirer";
class Player {
    name;
    energyLevel = 100;
    constructor(name) {
        this.name = name;
    }
    energyDec() {
        let energyLevel = this.energyLevel - Math.floor(Math.random() * 100);
        this.energyLevel = energyLevel;
    }
    energyInc() {
        let energyLevel = this.energyLevel + Math.floor(Math.random() * 100);
        this.energyLevel = energyLevel;
    }
    energySame() {
        let energyLevel = this.energyLevel;
    }
    energyBoost() {
        let energyLevel = this.energyLevel + 300;
        this.energyLevel = energyLevel;
    }
}
class Enemy {
    name;
    energyLevel = 100;
    constructor(name) {
        this.name = name;
    }
    energyDec() {
        let energyLevel = this.energyLevel - Math.floor(Math.random() * 100);
        this.energyLevel = energyLevel;
    }
    energyInc() {
        let energyLevel = this.energyLevel + Math.floor(Math.random() * 100);
        this.energyLevel = energyLevel;
    }
    energySame() {
        let energyLevel = this.energyLevel;
    }
    energyBoost() {
        let energyLevel = this.energyLevel + 300;
        this.energyLevel = energyLevel;
    }
}
let player = await inquirer.prompt([
    {
        name: "Name",
        type: "input",
        message: "Enter your Name: "
    }
]);
let enemy = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select your Enemy",
        choices: ["Vampire", "Ken", "Hulk", "Bratz"]
    }
]);
let p1 = new Player(player.Name);
let e1 = new Enemy(enemy.Select);
do {
    if (enemy.Select == "Vampire") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Defense", "Run", "Use Life Potion"]
            }
        ]);
        if (p1.energyLevel > 0 && e1.energyLevel > 0) {
            if (ask.Opt == "Attack") {
                let num = Math.floor(100 * Math.random());
                if (num > 50) {
                    p1.energyDec();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
                else if (num <= 50) {
                    e1.energyDec();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Defense") {
                let num = Math.floor(100 * Math.random());
                if (num <= 50) {
                    p1.energyInc();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
                else if (num > 50) {
                    e1.energyInc();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Run") {
                let num = Math.floor(100 * Math.random());
                if (num > 0) {
                    p1.energySame();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Use Life Potion") {
                let num = Math.floor(100 * Math.random());
                if (num > 0) {
                    p1.energyBoost();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
        }
        else if (p1.energyLevel <= 0 && e1.energyLevel > 0) {
            console.log("You loose! Better luck next time!");
        }
        else if (p1.energyLevel > 0 && e1.energyLevel <= 0) {
            console.log("You win!!");
        }
    }
    if (enemy.Select == "Ken") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Defense", "Run", "Use Life Potion"]
            }
        ]);
        if (p1.energyLevel > 0 && e1.energyLevel > 0) {
            if (ask.Opt == "Attack") {
                let num = Math.floor(100 * Math.random());
                if (num > 50) {
                    p1.energyDec();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
                else if (num <= 50) {
                    e1.energyDec();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Defense") {
                let num = Math.floor(100 * Math.random());
                if (num <= 50) {
                    p1.energyInc();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
                else if (num > 50) {
                    e1.energyInc();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Run") {
                let num = Math.floor(100 * Math.random());
                if (num > 0) {
                    p1.energySame();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Use Life Potion") {
                let num = Math.floor(100 * Math.random());
                if (num > 0) {
                    p1.energyBoost();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
        }
        else if (p1.energyLevel <= 0 && e1.energyLevel > 0) {
            console.log("You loose! Better luck next time!");
        }
        else if (p1.energyLevel > 0 && e1.energyLevel <= 0) {
            console.log("You win!!");
        }
    }
    if (enemy.Select == "Hulk") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Defense", "Run", "Use Life Potion"]
            }
        ]);
        if (p1.energyLevel > 0 && e1.energyLevel > 0) {
            if (ask.Opt == "Attack") {
                let num = Math.floor(100 * Math.random());
                if (num > 50) {
                    p1.energyDec();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
                else if (num <= 50) {
                    e1.energyDec();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Defense") {
                let num = Math.floor(100 * Math.random());
                if (num <= 50) {
                    p1.energyInc();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
                else if (num > 50) {
                    e1.energyInc();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Run") {
                let num = Math.floor(100 * Math.random());
                if (num > 0) {
                    p1.energySame();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Use Life Potion") {
                let num = Math.floor(100 * Math.random());
                if (num > 0) {
                    p1.energyBoost();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
        }
        else if (p1.energyLevel <= 0 && e1.energyLevel > 0) {
            console.log("You loose! Better luck next time!");
        }
        else if (p1.energyLevel > 0 && e1.energyLevel <= 0) {
            console.log("You win!!");
        }
    }
    if (enemy.Select == "Bratz") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Defense", "Run", "Use Life Potion"]
            }
        ]);
        if (p1.energyLevel > 0 && e1.energyLevel > 0) {
            if (ask.Opt == "Attack") {
                let num = Math.floor(100 * Math.random());
                if (num > 50) {
                    p1.energyDec();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
                else if (num <= 50) {
                    e1.energyDec();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Defense") {
                let num = Math.floor(100 * Math.random());
                if (num <= 50) {
                    p1.energyInc();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
                else if (num > 50) {
                    e1.energyInc();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Run") {
                let num = Math.floor(100 * Math.random());
                if (num > 0) {
                    p1.energySame();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
            else if (ask.Opt == "Use Life Potion") {
                let num = Math.floor(100 * Math.random());
                if (num > 0) {
                    p1.energyBoost();
                    console.log(`${p1.name} has ${p1.energyLevel}.`);
                    console.log(`${e1.name} has ${e1.energyLevel}.`);
                }
            }
        }
        else if (p1.energyLevel <= 0 && e1.energyLevel > 0) {
            console.log("You loose! Better luck next time!");
        }
        else if (p1.energyLevel > 0 && e1.energyLevel <= 0) {
            console.log("You win!!");
        }
    }
} while (true);
