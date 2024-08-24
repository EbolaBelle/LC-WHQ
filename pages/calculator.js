//Global variables

let firstNumber;
let secondNumber;
let operator;
let displayValue;
const OPERATORS = ['+','-','x','/']

//DOM variables

const numberBtns = document.querySelectorAll(".numbers > .numbtns");
const output = document.querySelector(".output");
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equal = document.querySelector('#equals');
const invert = document.querySelector('#invert');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');

//Operator buttons

addBtn.addEventListener('click', () => {
    handleOperator(addBtn);
    operator = "add";
})
subtractBtn.addEventListener('click', () => {
    handleOperator(subtractBtn);
    operator = "subtract";
})
multiplyBtn.addEventListener('click', () => {
    handleOperator(multiplyBtn);
    operator = "multiply";
})
divideBtn.addEventListener('click', () => {
    handleOperator(divideBtn);
    operator = "divide";
})

//Special function buttons

invert.addEventListener('click', () => {
    output.textContent = output.textContent * -1;
})
clear.addEventListener('click', () => {
    cleanSlate()
    output.textContent = "";
})
equals.addEventListener('click', () => {
    secondNumber = +(output.textContent);
    output.textContent = operate(firstNumber, secondNumber, operator);
    cleanSlate();
    displayValue = output.textContent;
})
decimal.addEventListener('click', function() {
    if (displayValue % 1 !== 0 || typeof displayValue === "string") { //check if decimal already present
        return;
    } else {
        output.textContent = output.textContent + this.textContent;
        displayValue = output.textContent;
    }
})

//Number buttons

numberBtns.forEach((btn) => {
    btn.addEventListener('click', handleNumber);
})

//function declarations

function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
   return a * b;
}
function divide(a,b) {
    if (b === 0) {
        return ";)"
    } else {
    return a / b;
    }
}
function operate(a,b,operator) {
    if (a !== a || b !== b) { //check if a or b is NaN
        return "Error";
    } else {
        switch (operator) {
            case 'add':
                return add(a,b);
                break;
            case 'subtract':
                return subtract(a,b);
                break;
            case 'multiply':
                return multiply(a,b);
                break;
            case 'divide':
                return divide(a,b);
                break;
        }
    }
}
function cleanSlate() {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
}
function handleNumber() {
    if (OPERATORS.some(sign => output.textContent.includes(sign))) { //check if operator is displayed
        output.textContent = "";
    }
    if (output.textContent.length <= 21) {
        output.textContent = output.textContent + this.textContent;
    }
    displayValue = +(output.textContent);
}
function handleOperator(btn) {
    firstNumber = +(output.textContent);
    output.textContent = btn.textContent;
}