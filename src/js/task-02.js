const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');
console.log(listIngredients);

const itemIngredient = ingredients.forEach(item => {
  const createIngredient = document.createElement('li');
  createIngredient.textContent = item;
  
  listIngredients.appendChild(createIngredient);
});






