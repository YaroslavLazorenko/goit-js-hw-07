const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeListItemAndImageMarkup = ({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}"></li>`;
};

const galleryMarkup = images.map(image => makeListItemAndImageMarkup(image)).join('');

const galleryList = document.getElementById('gallery');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

//<=========== Adding classes for styling the markup ==============>

galleryList.classList.add('list');

const galleryListItems = document.querySelectorAll('.list > li');
galleryListItems.forEach(item => item.classList.add('list-item'));

const galleryImages = document.querySelectorAll('.list img');
galleryImages.forEach(item => item.classList.add('list-item-image'));
