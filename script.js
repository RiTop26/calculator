// Add two numbers
const add = function(a,b) {
    return a + b;
}
console.log(add(12, 7));

// Subtract two numbers
const subtract =function(a, b) {
    return a - b;
}
console.log(subtract(12, 7));

// Multiply two numbers
const multiply = function(a, b) {
    return a * b;
}
console.log(multiply(12, 7));

// Divide two number
const divide =function(a, b) {
    if (b == 0) {
        return "Undefined";
    }
    else {
        return a / b;
    }
}
console.log(divide(12, 0));

// Create three variable;
let firstNumber = "";
let secondNumber = "";
let theOperator = "";

// Operating two numbers and an operator
const operate = function(firstNumber, theOperator, secondNumber) {
    if (theOperator == "+") {
        return add(firstNumber, secondNumber);
    }
    else if (theOperator == "-") {
        return subtract(firstNumber, secondNumber);
    }
    else if(theOperator == "*") {
        return multiply(firstNumber, secondNumber);
    }
    else if (theOperator == "/") {
        return divide(firstNumber, secondNumber)
    }
}
console.log(operate(12, "*", 5));
