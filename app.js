let currentValue = ''
let previousValue = '0'
let operator = '+'

let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const previousScreen = document.querySelector("#previous")
const currentScreen = document.querySelector("#current")
const equal = document.querySelector(".equal")

numbers.forEach((number) => number.addEventListener('click', function (e) {
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
}))

operators.forEach((op) => op.addEventListener('click', function (e) {
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue + " " + operator
    currentScreen.textContent = currentValue
}))

equal.addEventListener('click', function () {
    calculate()
    previousScreen.textContent = ''
    if (previousValue.length < 10) {
        currentScreen.textContent = previousValue
    } else {
        currentScreen.textContent = previousValue.slice(0, 10) + "...";
    }

})

clear.addEventListener('click', function () {
    previousValue = '0'
    currentValue = ''
    operator = '+'
    previousScreen.textContent = previousValue
    currentScreen.textContent = currentValue
})

function handleNumber(num) {
    if (currentValue.length < 10) {
        currentValue += num;
    }
}

function handleOperator(op) {
    calculate()
    operator = op
    currentValue = ''
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "*") {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 10000) / 10000;
}