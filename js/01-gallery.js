import { galleryItems } from './gallery-items.js';
// Change code below this line
const modalInstance = basicLightbox.create(`
    <img src="" width="800" height="600">
`, {
    onShow: () => {
        document.addEventListener('keydown', closeImage);
    },
    onClose: () => {
        document.removeEventListener('keydown', closeImage)
    }
});
const galleryRoot = document.querySelector('.gallery');
const galleryElements = galleryItems.map((item) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>
`).join('');

galleryRoot.addEventListener('click', openImage);
galleryRoot.insertAdjacentHTML('beforeend', galleryElements);

function openImage(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();

    modalInstance.element().querySelector('img').src = event.target.dataset.source;
    modalInstance.show();
}

function closeImage(event) {
    if (event.key === 'Escape') {
        modalInstance.close();
    }
}
