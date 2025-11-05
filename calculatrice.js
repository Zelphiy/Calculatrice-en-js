const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const numbersButtons = document.querySelectorAll('button[data-number]');
const resetBtn = document.querySelector('.clear');
const equals = document.querySelector('.equals');
let flagAlreadyEquals = false;
let number1 = '';
let operator = '';
let number2 = '';


operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch (e.currentTarget.dataset.operator) {
            case '+':
                console.log('+');
                addToDisplay('+')
                break;
            case '-':
                console.log('-');
                addToDisplay('-')
                break;
            case '*':
                console.log('*');
                addToDisplay('*')
                break;
            case '/':
                console.log('/');
                addToDisplay('/')
                break;
            default:
                break;
        }
    });
});

function setToDisplay(displayValue) {
    display.innerText = displayValue;
}

function addToDisplay(key){
    const last = display.innerHTML.slice(-1);
    const isOp = "+-*/".includes(String(key));
    const lastIsOp = "+-*/".includes(last);
    const haveOp = display.innerHTML.includes("+") || display.innerHTML.includes("-") || display.innerHTML.includes("*") || display.innerHTML.includes("/");
    console.log(haveOp);

    if (isOp && (display.innerHTML.length === 0 || display.innerHTML === "0")) {
        return;
    }

    if (isOp) {
        if (lastIsOp) {
            display.innerHTML = display.innerHTML.slice(0, -1) + key;
    else {
        if (display.innerHTML === "0" && !isOp || flagAlreadyEquals && !isOp && !"+*-/".includes(display.innerHTML[display.innerHTML.length-1])) {
            display.innerHTML = key;
            flagAlreadyEquals = false;
            storeValues();
        } else {
            display.innerHTML += key;
            storeValues();
            return;
        }
        if (haveOp) {
            return;
        }
    }

    if (display.innerHTML === "0" && !isOp) {
        display.innerHTML = key;
        storeValues();
    } else {
        display.innerHTML += key;
        storeValues();
    }
}

numbersButtons.forEach(numbersBtn => {
    numbersBtn.addEventListener('click', (e) => {
        switch (e.currentTarget.dataset.number) {
            case '1':
                console.log('1');
                addToDisplay(1);
                break;
            case '2':
                console.log('2');
                addToDisplay(2);
                break;
            case '3':
                console.log('3');
                addToDisplay(3);
                break;
            case '4':
                console.log('4');
                addToDisplay(4);
                break;
            case '5':
                console.log('5');
                addToDisplay(5);
                break;
            case '6':
                console.log('6');
                addToDisplay(6);
                break;
            case '7':
                console.log('7');
                addToDisplay(7);
                break;
            case '8':
                console.log('8');
                addToDisplay(8);
                break;
            case '9':
                console.log('9');
                addToDisplay(9);
                break;
            case '0':
                console.log('0');
                addToDisplay(0);
                break;
        }
    });
});

function storeValues() {
    const text = display.innerHTML;
    const match = text.match(/[+\-*/]/);
    if (!match) {
        number1 = text;
        operator = '';
        number2 = '';
        return;
    }
    const op = match[0];
    const idx = text.indexOf(op);
    number1 = text.slice(0, idx);
    operator = op;
    number2 = text.slice(idx + 1);
}

function sum(a,b){
    let result = Number(a) + Number(b);
    setToDisplay(result);
}

function sub(a, b) {
    let result = Number(a) - Number(b);
    setToDisplay(result);
}

function multiply(a, b) {
    let result = Number(a) * Number(b);
    setToDisplay(result);
}

function divide(a, b) {
    let result = Number(a) / Number(b);
    setToDisplay(result);
}

equals.addEventListener('click', () => {
    if(number1 === '0' || number2 === '' || operator === ''){
        return false;
    }
    switch (operator) {
        case '+':
            sum(number1, number2);
            flagAlreadyEquals = true;
            break;
        case '-':
            sub(number1, number2);
            flagAlreadyEquals = true;
            break;
        case '*':
            multiply(number1, number2);
            flagAlreadyEquals = true;
            break;
        case '/':
            divide(number1, number2);
            flagAlreadyEquals = true;
            break;
    }
})

function resetCalculator() {
    number1 = '';
    operator = '';
    number2 = '';
    display.innerHTML = '0';
}

resetBtn.addEventListener('click', resetCalculator)

document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (/^[0-9]$/.test(key)) {
        e.preventDefault();
        addToDisplay(key);
        return;
    }

    if ("+-*/".includes(key)) {
        e.preventDefault();
        addToDisplay(key);
        return;
    }
    
    switch (e.code) {
        case 'NumpadAdd':
            e.preventDefault();
            addToDisplay('+');
            return;
        case 'NumpadSubtract':
            e.preventDefault();
            addToDisplay('-');
            return;
        case 'NumpadMultiply':
            e.preventDefault();
            addToDisplay('*');
            return;
        case 'NumpadDivide':
            e.preventDefault();
            addToDisplay('/');
            return;
        case 'NumpadEnter':
            e.preventDefault();
            equals.click();
            return;
    }
    
    if (key === 'Enter') {
        e.preventDefault();
        equals.click();
        return;
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
        e.preventDefault();
        resetCalculator();
        return;
    }
});