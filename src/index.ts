import { Calculator } from "./calculator";
const readline = require("readline");

const instr =
  "To calculate, please enter the operation to calculate in the following format:";
const operationFormat =
  "<operations> (add | subtract | multiply | divide) <number> <number>";

console.info("Welcome to calculator");
console.info(instr);
console.info(operationFormat);

const calculator = new Calculator();

let rl = readline.createInterface(process.stdin, process.stdout);

const readLine = () => {
  rl.question("= ", (input: string) => {
    throwOpearation(input);
  });
};

readLine();

const throwOpearation = (input: string) => {
  const parts = input.trim().split(" ");
  const operation = parts[0];

  if (parts.length !== 3 && operation !== "exit" && operation !== "help") {
    console.error(
      "Invalid input format. Please enter <operation> <number> <number>"
    );
  }

  const a = parseFloat(parts[1]);
  const b = parseFloat(parts[2]);
  let result: number;

  switch (operation) {
    case "add":
      result = calculator.add(a, b);
      console.log(`Result: ${result}`);
      break;
    case "subtract":
      result = calculator.subtract(a, b);
      console.log(`Result: ${result}`);
      break;
    case "multiply":
      result = calculator.multiply(a, b);
      console.log(`Result: ${result}`);
      break;
    case "divide":
      result = calculator.divide(a, b);
      console.log(`Result: ${result}`);
      break;
    case "help":
      console.info("Help...");
      console.info(instr);
      console.info(operationFormat);
      break;
    case "exit":
      console.log("Exiting...");
      process.exit(0);
    default:
      console.error("Unsupported operation");
  }

  readLine();
};
