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

// Create a function that update numbers
const displayElement = document.querySelector(".display");
const updateDigit = function(digits) {
    if(theOperator == "") {
        firstNumber += digits.target.textContent;
        displayElement.textContent = firstNumber;
    }
    else {
        secondNumber += digits.target.textContent;
        displayElement.textContent = secondNumber;
    }
}
// Attach an event to the digit buttons
const digitElement = document.querySelectorAll(".digit");
for (let i = 0; i < digitElement.length; i++) {
    digitElement[i].addEventListener("click", updateDigit);
}


// Create a function that handle the operators
const handleOperator = function(operators) {

    if(theOperator == "") {
        theOperator = operators.target.textContent;
    }

    // Convert operators
    if (theOperator == "×") {
        theOperator = "*";
    }
    else if (theOperator == "÷") {
        theOperator = "/";
    }
    else {
        theOperator = theOperator;
    }
}
// Attach an event to the operator buttons
const operatorElement = document.querySelectorAll(".operator");
for (let i = 0; i < operatorElement.length; i++) {
    operatorElement[i].addEventListener("click", handleOperator);
}

// Create a function that execute when equal button is clicked
const equalFunction = function() {
    if(firstNumber != "" && theOperator != "" && secondNumber != "") {
        displayElement.textContent = operate(firstNumber, theOperator, secondNumber);
    }
}
// Attach an event to the equal button
const equals = document.querySelector(".equal");
equals.addEventListener("click", equalFunction);

// A function for the clear button
const clearFunction = function() {

}
// Attach an event to the clear button
const theClear = document.querySelector(".clear");
theClear.addEventListener("click", clearFunction);