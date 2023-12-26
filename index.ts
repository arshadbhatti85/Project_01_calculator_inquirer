//My Second Assignment
// Muhammad Arshad
// PIAIC BATCH NO. 51 KARACHI
// REG NO PIAIC137679

import inquirer from "inquirer";

let answer = await inquirer.prompt([{
    type: "number",
    name: "num1",
    message: "Please Enter your first number: "
},
{
    type: "number",
    name: "num2",
    message: "Please Enter your second number: "

},{
    type: "list",
    name: "operator",
    message: "Please Enter the operator",
    choices: ["add", "subtract", "multiply", "divide"]
}])
let result: number
switch (answer.operator){
    case "add": 
    result = answer.num1+answer.num2
    console.log(result)
    break;

    case "subtract": 
    result = answer.num1-answer.num2
    console.log(result)
    break;

    case "multiply": 
    result = answer.num1*answer.num2
    console.log(result)
    break;

    case "divide": 
    result = answer.num1/answer.num2
    console.log(result)
    break;

}

















