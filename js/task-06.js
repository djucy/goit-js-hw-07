const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener ('blur', onInputBlur);

function onInputBlur(event) {
    const eventTargetValueLength = event.currentTarget.value.length;
    const inputDatasetLength = Number(inputRef.dataset.length);

    if (eventTargetValueLength === inputDatasetLength) {
        toggleClass(inputRef, 'valid', 'invalid')
    }
    else {
        toggleClass(inputRef, 'invalid', 'valid')
    }
};
 
function toggleClass(ref, active, inactive) {
    ref.classList.add(active);
    ref.classList.remove(inactive);
};