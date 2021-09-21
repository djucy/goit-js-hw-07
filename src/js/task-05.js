const inputRef = document.querySelector('#name-input');

const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);


function onInputChange(event) {
    if (event.currentTarget.value !== '') {
        spanRef.textContent = event.currentTarget.value;
    }
    else { spanRef.textContent = 'незнакомец'; }
      
}