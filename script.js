// functions for operations
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
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
    case 'add' : return add(a, b);
    case 'subtract' : return subtract(a, b);
    case 'multiply' : return multiply(a, b);
    case 'divide' : return divide(a, b);
    }
}

// functions for showing display
function display(number) {
    if (displayValue.length >= 12) {
        backspace();
        displayValue += number;
    } else if (displayValue.match(/\./) && number == '.') {
        number == ''
    } else if (displayValue == '' && number == '.') {
        displayValue = '0.';
        showValue(displayValue);        
    } else if (displayValue == '0' && number == '.') {
        displayValue = '0.';
        showValue(displayValue);
    } else if (displayValue == '0') {
        displayValue = number;
        showValue(displayValue);
    } else {
        displayValue += number;
    }
}

function showValue(showMe) {
    document.getElementById('showValue').textContent = showMe;
}

function validateSolution(solNumb) {
    let solutionLength = solNumb.toString().length;
    if (solutionLength > 12) {
        if ((solNumb % 1) != 0) {
            solNumb = solNumb.toPrecision(10);
        } else {
            solNumb = solNumb.toPrecision(7);
        }
    } else {
        return solNumb;
    }
    return solNumb;
}

function updateDisplay(updateNumber) {
    display(updateNumber);
    showValue(displayValue);
}

//functions for operators

function pressOperator(newOperator) {
    if (storedValue == 0) {
        storedValue = Number(displayValue);
        displayValue = '';
        savedOperator = newOperator;
    } else if (displayValue == '') {
        savedOperator = newOperator;
    } else {
        let tempSolution = Number(operate(savedOperator, storedValue, Number(displayValue)));        
        storedValue = tempSolution;
        showValue(validateSolution(tempSolution));
        displayValue = '';
        savedOperator = newOperator;
    }
}

function fullClear() {
    displayValue = '';
    storedValue = 0;
    solution = 0;
    showValue(displayValue);
}

function pressEquals() {
    if (savedOperator == '' || displayValue == '') {
        console.log('no operator/displayValue');
    } else if (savedOperator == 'divide' && displayValue == '0') {
        fullClear();
        showValue('QUACK QUACK');
        quack.play();
    } else {
        let solution = Number(operate(savedOperator, storedValue, Number(displayValue)));                                                                        
        storedValue = solution;                                                                    
        showValue(validateSolution(solution));
        savedOperator = '';
        displayValue = '';}
}

function backspace() {
    let displayValueArray = displayValue.split('');
        displayValueArray.pop();
        displayValue = displayValueArray.join('');
    showValue(displayValue)
}

let displayValue = '';
let storedValue = 0;
let savedOperator = '';
let quack = new Audio('quack.mp3');

// functions for button press
document.getElementById('1').addEventListener("click", function () {updateDisplay('1')});
document.getElementById('2').addEventListener("click", function () {updateDisplay('2')});
document.getElementById('3').addEventListener("click", function () {updateDisplay('3')});
document.getElementById('4').addEventListener("click", function () {updateDisplay('4')});
document.getElementById('5').addEventListener("click", function () {updateDisplay('5')});
document.getElementById('6').addEventListener("click", function () {updateDisplay('6')});
document.getElementById('7').addEventListener("click", function () {updateDisplay('7')});
document.getElementById('8').addEventListener("click", function () {updateDisplay('8')});
document.getElementById('9').addEventListener("click", function () {updateDisplay('9')});
document.getElementById('zero').addEventListener("click", function () {updateDisplay('0')});
document.getElementById('decimal').addEventListener("click", function() {updateDisplay('.')});

document.getElementById('add').addEventListener("click", function () {pressOperator('add')});
document.getElementById('subtract').addEventListener("click", function () {pressOperator('subtract')});
document.getElementById('multiply').addEventListener("click", function () {pressOperator('multiply')});
document.getElementById('divide').addEventListener("click", function () {pressOperator('divide')});
document.getElementById('equals').addEventListener("click", function () {pressEquals()});
document.getElementById('clear').addEventListener("click", function() {fullClear()});
document.getElementById('backspace').addEventListener("click", function() {backspace()});

// functions for keyboard support
document.addEventListener('keydown', function(e) {
    if (isFinite(e.key)) {
        updateDisplay(e.key);
    } else if (e.key === '.') {
        updateDisplay('.');
    } else if (e.key === '+') {
        pressOperator('add');
    } else if (e.key === '-') {
        pressOperator('subtract');
    } else if (e.key === '*') {
        pressOperator('multiply');
    } else if (e.key === '/') {
        pressOperator('divide');
    } else if (e.key === 'Backspace') {
        backspace()
    } else if (e.key ==='Enter') {
        pressEquals()
    }
})