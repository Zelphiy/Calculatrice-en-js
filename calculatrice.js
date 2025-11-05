const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');

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
            case '÷':
                console.log('/');
                addToDisplay('/')
                break;
            default:
                break;
        }
    });
});

function addToDisplay(key){
    display.innerHTML += key;
}
