const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const buttons = document.querySelector('.buttons');
const numbersButtons = document.querySelectorAll('button[data-number]');
let number1 = '';
let operator = '';
let number2 = '';

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
    })
})

operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch (e.currentTarget.dataset.operator) {
            case '+':
                console.log('+');
                addToDisplay('+');
                break;
            case '-':
                console.log('-');
                addToDisplay('-');
                break;
            case '*':
                console.log('*');
                addToDisplay('*');
                break;
            case '÷':
                console.log('/');
                addToDisplay('/');
                break;
            default:
                break;
        }
    });
});

function addToDisplay(key){
    if (display.innerHTML === '0' && (typeof key === 'number' || /^[0-9]$/.test(String(key)))) {
        display.innerHTML = String(key);
    } else {
        display.innerHTML += key;
    }
    storeValues();
}

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