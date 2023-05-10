const display = document.getElementById('display');
const buttons = document.querySelectorAll('[data-button]');
let operation = null;
let previousNumber = 0;
let currentNumber = 0;
let existSecondNum = false;

buttons.forEach(button => button.addEventListener('click', e => {
    buttonClicked(button.textContent);
}));

function buttonClicked(value){
    if (isNaN(value)) handleOperation(value); 
        else handleNumber(value);
};

function handleNumber(number){
    if (display.textContent == '0' || existSecondNum === null) display.textContent = number;
        else if (display.textContent.length < 11 && existSecondNum === false) display.textContent += number;
            else if (existSecondNum === true){
                display.textContent = number;
                existSecondNum = false;
            };
};

function handleOperation(operator){
    switch (operator){
        case 'AC':
            display.textContent = 0;
            operation = null;
            previousNumber = 0;
            currentNumber = 0;
            existSecondNum = false;
            break;
        case '←':
            if (display.textContent.length === 1) display.textContent = 0;
                else
                    display.textContent = display.textContent.substring(0, display.textContent.length -1);
            break;
        case '÷':
            if (operation === null){
                previousNumber = parseFloat(display.textContent);
                operation = "division";
                existSecondNum = true;
                break;} 
            else {
                currentNumber = parseFloat(display.textContent);
                display.textContent = calculate(previousNumber, currentNumber, operation);
                operation = "division";
                previousNumber = parseFloat(display.textContent);
                currentNumber = 0;
                existSecondNum = true;
                break;
            }

        case '×':
            if (operation === null){
                previousNumber = parseFloat(display.textContent);
                operation = "product";
                existSecondNum = true;
                break;} 
            else {
                currentNumber = parseFloat(display.textContent);
                display.textContent = calculate(previousNumber, currentNumber, operation);
                operation = "product";
                previousNumber = parseFloat(display.textContent);
                currentNumber = 0;
                existSecondNum = true;
                break;
            }

        case '−':
            if (operation === null){
                previousNumber = parseFloat(display.textContent);
                operation = "substraction";
                existSecondNum = true;
                break;} 
            else {
                currentNumber = parseFloat(display.textContent);
                display.textContent = calculate(previousNumber, currentNumber, operation);
                operation = "substraction";
                previousNumber = parseFloat(display.textContent);
                currentNumber = 0;
                existSecondNum = true;
                break;
            }

        case '+':
            if (operation === null){
                previousNumber = parseFloat(display.textContent);
                operation = "addition";
                existSecondNum = true;
                break;} 
            else {
                currentNumber = parseFloat(display.textContent);
                display.textContent = calculate(previousNumber, currentNumber, operation);
                operation = "addition";
                previousNumber = parseFloat(display.textContent);
                currentNumber = 0;
                existSecondNum = true;
                break;
            }

        case '=':
            if (operation !== null) {
                currentNumber = parseFloat(display.textContent);
                display.textContent = calculate(previousNumber,currentNumber,operation);
                existSecondNum = null;
            };
            break;
        case '.':
            display.textContent += '.';
            break;
    };
};

function calculate(a, b, operation){
    switch (operation){
        case "division":
            return a/b;
            break;
        case "product":
            return a*b;
            break;
        case "substraction":
            return a-b;
            break;
        case "addition":
            return a+b;
            break;
    }

}