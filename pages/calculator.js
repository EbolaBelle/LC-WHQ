//Global variables

let firstNumber;
let secondNumber;
let operator;
let displayValue;

//DOM variables

const output = document.querySelector(".output");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector('#two');
const buttonThree = document.querySelector('#three');
const buttonFour = document.querySelector('#four');
const buttonFive = document.querySelector('#five');
const buttonSix = document.querySelector('#six');
const buttonSeven = document.querySelector('#seven');
const buttonEight = document.querySelector('#eight');
const buttonNine = document.querySelector('#nine');
const buttonZero = document.querySelector('#zero');
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
    handleOperator();
    operator = "add";
})
subtractBtn.addEventListener('click', () => {
    handleOperator();
    operator = "subtract";
})
multiplyBtn.addEventListener('click', () => {
    handleOperator();
    operator = "multiply";
})
divideBtn.addEventListener('click', () => {
    handleOperator();
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
    if (displayValue % 1 !== 0) {
        return;
    } else {
        output.textContent = output.textContent + this.textContent;
    }
})

//Number buttons

buttonOne.addEventListener('click', handleNumber)
buttonTwo.addEventListener('click', handleNumber)
buttonThree.addEventListener('click', handleNumber)
buttonFour.addEventListener('click', handleNumber)
buttonFive.addEventListener('click', handleNumber)
buttonSix.addEventListener('click', handleNumber)
buttonSeven.addEventListener('click',handleNumber)
buttonEight.addEventListener('click',handleNumber)
buttonNine.addEventListener('click', handleNumber)
buttonZero.addEventListener('click', handleNumber)

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
    output.textContent = output.textContent + this.textContent;
    displayValue = +(output.textContent);
}
function handleOperator() {
    firstNumber = +(output.textContent)
    output.textContent = "";
}