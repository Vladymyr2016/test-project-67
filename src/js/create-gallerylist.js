import arr from '../data/product.json';

import { createCart } from './createCartGallery';

export default function createGalleryList() {
  const listCart = arr.map(createCart);

  // ulNew.insertAdjacentElement("beforeend", listCart);
  ulNew.append(...listCart);
  document.body.append(ulNew);
}
