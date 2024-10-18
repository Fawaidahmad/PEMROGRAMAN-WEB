let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        document.getElementById('display').value = currentInput;
    }
}

function operate(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '**':
            result = Math.pow(prev, current);
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    document.getElementById('display').value = result;
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1); // Removes the last character
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {  // Clear everything for "AC"
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}

