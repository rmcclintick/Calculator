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

//clears screen and entry history
function clearAll()
{
    output.textContent = '';
    //will need to clear user entry array as well
}
