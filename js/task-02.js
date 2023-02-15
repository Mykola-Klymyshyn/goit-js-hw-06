const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ListEl = document.querySelector("#ingredients");
const createList = content => {
return content.map(( ingredients) => {
const itemEl = document.createElement('li');
itemEl.textContent = ingredients;
itemEl.classList.add = ("item");
return itemEl;
});
};

 const elements = createList(ingredients);
 ListEl.append(...elements);
console.log(ListEl);