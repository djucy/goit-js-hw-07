const inputRef = document.querySelectorAll('#validation-input');

console.log(inputRef);
console.log(inputRef[0]);

inputRef[0].addEventListener ('blur', onInputBlur);


function onInputBlur(event) {
    const eventTargetValueLength = event.currentTarget.value.length;
    const inputDatasetLength = Number(inputRef[0].dataset.length);

    if (eventTargetValueLength === inputDatasetLength) {
        inputRef[0].classList.add('valid');
        inputRef[0].classList.remove('invalid');
    }
    else {
       inputRef[0].classList.remove('valid');
        inputRef[0].classList.add('invalid');
    }
 }