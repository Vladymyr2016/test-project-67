const ulNew = document.createElement('ul');

export function createCart(cart) {
  //   console.log(cart);
  const card = document.createElement('li');

  const title = document.createElement('h2');
  title.textContent = `${cart.name}`;
  //   console.log(title);
  const par = document.createElement('p');
  par.textContent = `${cart.price}`;
  card.append(title, par);
  return card;
}
export function test() {
  console.log('це тест');
}

// export { createCart, test };
