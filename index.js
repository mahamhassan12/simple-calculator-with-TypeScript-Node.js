#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number ", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    { message: "Enter your third number", type: "number", name: "thirdNumber" },
    {
        message: "Select one of the following operators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//CONDITIONAL STATEMENTS:
if (answer.operators === "Addition") {
    console.log("Your total amount is: ", answer.firstNumber + answer.secondNumber + answer.thirdNumber);
}
else if (answer.operators === "Subtraction") {
    console.log("Your total amount is: ", answer.firstNumber - answer.secondNumber + answer.thirdNumber);
}
else if (answer.operators === "Multiplication") {
    console.log("Your total amount is: ", answer.firstNumber * answer.secondNumber + answer.thirdNumber);
}
else if (answer.operators === "Division") {
    console.log("Your total amount is: ", answer.firstNumber / answer.secondNumber + answer.thirdNumber);
}
else {
    console.log("Please select a valid operator");
}
