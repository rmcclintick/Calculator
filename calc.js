//input values
let num1;
let num2;
let operator;

//output screen
const output = document.querySelector('.input');

//clear button
const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    clearAll();
});

//number buttons
const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        output.textContent = output.textContent + button.textContent;
    })
});

//operator buttons
const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        operate(button.textContent);
    });
});

//equal button
const equalBtn = document.querySelector('.equal-btn');
equalBtn.addEventListener('click', evaluate);

//clears screen and entry history
function clearAll()
{
    output.textContent = '';
    //will need to clear user entry array as well
}

//evaluate entry
function evaluate()
{
    //broken
    if (!num1 && !num2){}
    else
    {
        if (!num2)
    }
}

function operate(op)
{
    //incomplete
    if (!output.textContent)
        alert('empty');
    else 
    {
        if (!num1)
        {
            num1 = Number(output.textContent);
            operator = op;
        } 
    }
    //alert(`num1:${num1} num2:${num2} op:${operator}`);
}
