"use strict";
// function calculateTotalPrice(cart: ShoppingCart): number {
//     let totalPrice = 0;
//     for (const item of cart.items) {
//         const itemPrice = item.price * item.quantity;
//         const discountedPrice = item.discount ? itemPrice * (1 - item.discount.percentage / 100) : itemPrice;
//         totalPrice += discountedPrice;
//     }
//     if (cart.globalDiscount) {
//         const globalDiscountedPrice = totalPrice * (1 - cart.globalDiscount.percentage / 100);
//         return globalDiscountedPrice;
//     }
//     return totalPrice;
// }
function addItemToCart(cart, newItem) {
    cart.items.push(newItem);
}
function removeItemFromCart(cart, itemName) {
    cart.items = cart.items.filter(item => item.name !== itemName);
}
function updateItemQuantity(cart, itemName, newQuantity) {
    const item = cart.items.find(item => item.name === itemName);
    if (item) {
        item.quantity = newQuantity;
    }
}
// Example usage:
const cart1 = {
    items: [
        { name: "Grape", price: 2, quantity: 20 },
        { name: "Apple", price: 1.5, quantity: 5 },
        { name: "Pineapple", price: 1, quantity: 2 }
    ]
};
removeItemFromCart(cart1, "Apple");
updateItemQuantity(cart1, "Grape", 5);
addItemToCart(cart1, { name: "Peach", price: 1.25, quantity: 3 });
console.log(cart1);
const cart = {
    items: [
        { name: "Apple", price: 1.5, quantity: 3 },
        { name: "Banana", price: 0.75, quantity: 5, discount: { percentage: 10 } }
    ],
    globalDiscount: { percentage: 5 }
};
// console.log("Total Price:", calculateTotalPrice(cart)); // Output: 12.9375
//addItemToCart(cart, { name: "Orange", price: 2, quantity: 4 });
// console.log("Total Price after adding Orange:", calculateTotalPrice(cart)); // Output: 20.5875
//removeItemFromCart(cart, "Banana");
// console.log("Total Price after removing Banana:", calculateTotalPrice(cart)); // Output: 19.0625
//updateItemQuantity(cart, "Apple", 5);
// console.log("Total Price after updating Apple quantity:", calculateTotalPrice(cart)); // Output: 20.5625
console.log(cart);
