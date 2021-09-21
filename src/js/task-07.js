const inputRef = document.querySelector('#font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', onChangeInputRange);

function onChangeInputRange(event) {
   
    spanRef.style.fontSize = event.currentTarget.value + "px";

}