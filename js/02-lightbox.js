import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRoot = document.querySelector('.gallery');
const galleryElements = galleryItems.map((item) => `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
`).join('');

galleryRoot.insertAdjacentHTML('beforeend', galleryElements);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
