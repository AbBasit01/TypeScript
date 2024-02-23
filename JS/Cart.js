"use strict";
//
let shoppingCart = [
    {
        name: "Apple",
        price: 250,
        quantity: 1,
    },
    {
        name: "Banana",
        price: 250,
        quantity: 1,
    },
    {
        name: "Mango",
        price: 250,
        quantity: 1,
    },
];
// Functions
function totalPrice() {
    let totalCartValue = 0;
    shoppingCart.forEach((cartObject) => {
        totalCartValue = totalCartValue + cartObject.price;
    });
    console.log("Total Cart Value : ", totalCartValue);
}
// Checkpoint 1 = -2;
//
function add(name, price, quantity) {
    shoppingCart.push({
        name,
        price,
        quantity,
    });
}
function add1(obj) {
    shoppingCart.push(obj);
}
function removeitem(objName) {
    shoppingCart = shoppingCart.filter(o => o.name !== objName);
}
//removeitem('Banana')
console.log(shoppingCart);
