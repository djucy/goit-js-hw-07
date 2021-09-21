
const ulCategoriesRef = document.querySelector('#categories');
const countItemRef = ulCategoriesRef.children.length;
console.log(`В списке ${countItemRef} категории.`);

const itemRef = document.querySelectorAll('.item');

const arrayItemRef = itemRef.forEach(el => {
    const nameEl = el.querySelector('h2').textContent;
    const listItemRef = el.querySelector('ul');
    const countListItemRef = listItemRef.children.length;
    
    console.dir(`Категория: ${nameEl}`);
    console.dir(`Количество элементов: ${countListItemRef}`);
});

