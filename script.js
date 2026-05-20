function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Can't divide by Zero !";
    }
    return a / b;
}

let firstOperand, operator, secondOperand;

function operate(first, second, op) {
    let result = 0;
    if (op === '+') {
        result = add(first, second);
    }
    else if (op === '-') {
        result = subtract(first, second);
    }
    else if (op === '*') {
        result = multiply(first, second);
    }
    else if (op === '/') {
        result = divide(first, second);
    }
    else {
        return "Operator Doesn't Exist";
    }
    return result;
}

let displayValue = "";
const operators = document.querySelectorAll('.operators button');
const numbtn = document.querySelectorAll('.number button');
const display = document.querySelector('#display');

numbtn.forEach((singleItem) => {
    singleItem.addEventListener('click', (event) => {
        let text = event.target.innerText;
        displayValue += text;
        display.textContent = displayValue;
    });
});

operators.forEach((singleItem) => {
    singleItem.addEventListener('click', (event) => {
        if (event.target.innerText === '=') {
            secondOperand = displayValue;
            displayValue = operate(Number(firstOperand), Number(secondOperand), operator);
            display.textContent = displayValue;
        }
        else if(event.target.innerText === "clear"){
            displayValue = "";
            firstOperand = "";
            secondOperand = "";
            operator = "";
            display.textContent = displayValue;
        }
        else {
            firstOperand = displayValue;
            operator = event.target.innerText;
            display.textContent = operator;
            displayValue = "";
        }
    });
});



