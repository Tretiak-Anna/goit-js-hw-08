const numCategories = document.querySelectorAll('.item');
console.log(`Number of Categories: ${numCategories.length}`);

numCategories.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
