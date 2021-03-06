//input values
let num1;
let num2;
let operator;
let line2isResult = false;

//line2 screen
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');

//info div
const info = document.querySelector('.error-info');

//clear button
const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    clearAll();
});

//number buttons
const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (line2isResult)
        {
            clearAll();
            line2isResult = false;
        }
        line2.textContent = line2.textContent + button.textContent;
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
equalBtn.addEventListener('click', () => {
    evaluate(false);
});

//clears screen and entry history
function clearAll()
{
    line1.textContent = '';
    line2.textContent = '';
    num1 = null;
    num2 = null;
    op = '';
    //will need to clear user entry array as well
}

//evaluate entry
function evaluate(isChained)
{
    let result;
    if (!num1 && !num2){}
    else if (!num2)
    {
        num2 = Number(line2.textContent);
    }
   
    switch (operator) 
    {
        case '/': //must check for divide by zero
            if (num2 == 0)
            {
                info.textContent = 'Please no divide by zero';
                clearAll();
            }
            else 
                result = num1 / num2;
            break;
        case 'x': result = num1 * num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '+': result = num1 + num2;
            break;
    }
    clearAll();
    //num1 = result;
    if (!isChained)
    {
        line2.textContent = Math.round(result * 10000) / 10000;
        line2isResult = true;
    }
    else
    {
        line1.textContent = Math.round(result * 10000) / 10000;
        num1 = Number(line1.textContent);
        num2 = null;
    }
        
    

}

function operate(op)
{
    //if no number entered, do nothing
    if (!line2.textContent)
        {}
    else 
    {
        if (!num1) //set num1
        {
            line2isResult = false;
            num1 = Number(line2.textContent);
            operator = op;
            line1.textContent = num1;
            line2.textContent = '';
        }
        else
        {
            num1 = Number(line1.textContent);
            num2 = Number(line2.textContent);
            
            evaluate(true);
            operator = op;
        }
    }

}
