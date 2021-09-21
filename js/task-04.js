const counterValue = document.querySelector('#value');
// counterValue.textContent = Number(counterValue.textContent)


const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');



const increment = () => {
    return counterValue.textContent = parseInt(counterValue.textContent) += 1;
    // return counterValue.textContent++;
}
const decrement = () => {
    // return counterValue.textContent = parseInt(counterValue.textContent) -= 1;
    return counterValue.textContent--;
}
btnIncrement.addEventListener('click', increment);

btnDecrement.addEventListener('click', decrement);

