import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const res = await inquirer.prompt({
  name: "userInput",
  type: "number",
  message: "Enter the count in seconds: ",
});

let input = res.userInput;

function startTime(val: number) {
  const intTime = new Date().setSeconds(new Date().getSeconds() + val);
  const intervalTime = new Date(intTime);

  // Function to display the remaining time
  function displayRemainingTime() {
    const currTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currTime);

    if (timeDiff <= 0) {
      console.log("Timer has expired");
      process.exit(); // Stop the process
    }

    const min = Math.floor(timeDiff % (3600 * 24) / 60);  // Changed from 3600 to 60 for minutes
    const sec = Math.floor(timeDiff % 60);
    console.log(`${min.toString().padStart(2, "0")} mins ${sec.toString().padStart(2, "0")} secs`);
  }

  // Run the first display immediately
  displayRemainingTime();

  // Start the interval for subsequent updates
  setInterval(() => {
    displayRemainingTime();
  }, 1000);
}

startTime(input);
