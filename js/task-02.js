const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');


const itemIngredient = ingredients.map(item => {
  const createIngredient = document.createElement('li');
  createIngredient.textContent = item;
  return createIngredient;
  
  
});

listIngredients.append(...itemIngredient);




