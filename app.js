const displayLocalstorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProduct(name);
  }
};

const addItem = () => {
  const nameField = document.getElementById("product-name");
  const name = nameField.value;
  if (!name) {
    return;
  }

  // display in the ui
  displayProduct(name);

  //  add to local storage
  addProductToCart(name);
  nameField.value = "";
};

const displayProduct = (name) => {
  const ul = document.getElementById("product");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getCart = () => {
  let cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getCart(name);
  //   cart[name] = 1;
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  const cartSrtingfied = JSON.stringify(cart);
  localStorage.setItem("cart", cartSrtingfied);
};

const placeOrder = () => {
  document.getElementById("product").textContent = "";
  localStorage.removeItem("cart");
};

displayLocalstorageCart();
