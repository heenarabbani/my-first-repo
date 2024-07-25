const calculator = document.querySelector('.calculator');
const screen = document.getElementById('screen');
const buttons = calculator.querySelectorAll('button');

let operation = '';
let currentNumber = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        switch (value) {
            case 'C':
                operation = '';
                currentNumber = '';
                screen.value = '';
                break;
            case '〈':
                currentNumber = currentNumber.slice(0, -1);
                screen.value = currentNumber;
                break;
            case '=':
                operation = eval(operation);
                screen.value = operation;
                break;
            default:
                operation += value;
                screen.value = operation;
        }
    });
});
