import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<li class="gallery__link"><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markupGallery);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(galleryItems);
