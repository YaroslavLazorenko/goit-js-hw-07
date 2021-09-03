const categoriesItems = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesItems.length} категории.`);

const titles = document.querySelectorAll('li.item > h2');
titles.forEach(title =>
  console.log(
    `Категория: ${title.textContent}. Количество элементов: ${title.nextElementSibling.children.length}`,
  ),
);
