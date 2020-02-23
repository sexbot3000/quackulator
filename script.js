// functions for operators

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
    case add : return add(a, b);
    case subtract : return subtract(a, b);
    case multiply : return multiply(a, b);
    case divide : return divide(a, b);
    }
}

// functions for showing display
function display(number) {
    displayValue += number;
    if (displayValue == '0') {
        displayValue = '';
    showValue(displayValue);
    }
}

function showValue() {
    document.getElementById('showValue').textContent = displayValue;
}

// functions for button press
const One = document.getElementById('1').addEventListener("click", function () {showValue(display('1'))});
const Two = document.getElementById('2').addEventListener("click", function () {showValue(display('2'))});
const Three = document.getElementById('3').addEventListener("click", function() {showValue(display('3'))});
const Four = document.getElementById('4').addEventListener("click", function () {showValue(display('4'))});
const Five = document.getElementById('5').addEventListener("click", function () {showValue(display('5'))});
const Six = document.getElementById('6').addEventListener("click", function () {showValue(display('6'))});
const Seven = document.getElementById('7').addEventListener("click", function () {showValue(display('7'))});
const Eight = document.getElementById('8').addEventListener("click", function () {showValue(display('8'))});
const Nine = document.getElementById('9').addEventListener("click", function () {showValue(display('9'))});
const Zero = document.getElementById('0').addEventListener("click", function () {showValue(display('0'))});

let displayValue = '';
