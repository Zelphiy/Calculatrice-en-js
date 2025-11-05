const display = document.querySelector('#display');
const buttons = document.querySelector('.buttons');
const numbersButtons = document.querySelectorAll('button[data-number]');

numbersButtons.forEach(numbersBtn => {
    numbersBtn.addEventListener('click', (e) => {
        switch (e.currentTarget.dataset.number) {
            case '1':
                console.log('1');
                break;
            case '2':
                console.log('2');
                break;
            case '3':
                console.log('3');
                break;
            case '4':
                console.log('4');
                break;
            case '5':
                console.log('5');
                break;
            case '6':
                console.log('6');
                break;
            case '7':
                console.log('7');
                break;
            case '8':
                console.log('8');
                break;
            case '9':
                console.log('9');
                break;
            case '0':
                console.log('0');
                break;
        }
    })
})