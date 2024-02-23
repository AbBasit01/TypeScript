"use strict";
function addToCart(cart, newItem) {
    cart.items.push(newItem);
}
function removeFromItem(cart, itemName) {
    cart.items = cart.items.filter((item) => item.name !== itemName);
}
function updateItemName(cart, itemName, newItem) {
    let item = cart.items.findIndex((item) => item.name === itemName);
    if (item > -1) {
        newCart.items[item] = newItem;
    }
}
var newCart = {
    items: [
        { name: "Grape", price: 2, quantity: 20 },
        { name: "Apple", price: 1.5, quantity: 5 },
        { name: "Pineapple", price: 1, quantity: 2 },
    ],
};
updateItemName(newCart, "Pineapple", { name: "orange", price: 2, quantity: 4 });
console.log(newCart);
