interface Item {
  name: string;
  price: number;
  quantity: number;
  discount?: Discount;
}

interface Discount {
  percentage: number;
}

interface ShoppingCart {
  items: Item[];
  globalDiscount?: Discount;
}

function addToCart(cart: ShoppingCart, newItem: Item): void {
  cart.items.push(newItem);
}

function removeFromItem(cart: ShoppingCart, itemName: string): void {
  cart.items = cart.items.filter((item) => item.name !== itemName);
}

function updateItemName(cart: ShoppingCart, itemName: string, newItem: Item) {
  let item = cart.items.findIndex((item) => item.name === itemName);
  if (item > -1) {
       newCart.items[item] = newItem;
  }
}

var newCart: ShoppingCart = {
  items: [
    { name: "Grape", price: 2, quantity: 20 },
    { name: "Apple", price: 1.5, quantity: 5 },
    { name: "Pineapple", price: 1, quantity: 2 },
  ],
};

updateItemName(newCart, "Pineapple", { name: "orange", price: 2, quantity: 4 });

console.log(newCart);
