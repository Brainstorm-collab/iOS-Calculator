let display = document.querySelector('.display');
let currentInput = "";
let operatorUsed = false;

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = "";
    }
    currentInput += number;
    display.innerText = currentInput;
    operatorUsed = false;
}

function appendOperator(operator) {
    if (!operatorUsed) {
        currentInput += " " + operator + " ";
        display.innerText = currentInput;
        operatorUsed = true;
    }
}

function clearDisplay() {
    currentInput = "0";
    display.innerText = currentInput;
    operatorUsed = false;
}

function calculate() {
    let expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
    try {
        currentInput = eval(expression).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = "Error";
        currentInput = "";
    }
}
