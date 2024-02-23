"use strict";
//Build a program to manage car rentals for a rental agency.
// Define interfaces for cars with properties like make, model, year, price, etc.
// Implement functions to add new cars, remove cars, update car details,
// calculate rental fees, and manage rental bookings.
function addCar(AddIn, NewCar) {
    AddIn.Cars.push(NewCar);
}
function removeCar(RemoveFrom, CarName) {
    RemoveFrom.Cars = RemoveFrom.Cars.filter((car) => car.model !== CarName);
}
function updatePrice(UpdateIn, CarModel, NewPrice) {
    var car = UpdateIn.Cars.find(car => car.model === CarModel);
    if (car) {
        car.price = NewPrice;
    }
}
function calculatePrice(days, price) {
    return (days * price);
}
var shop = {
    Cars: [
        { make: 'Honda', model: 'Civic', year: 2020, price: 5000 }
    ]
};
addCar(shop, { make: 'Toyota', model: 'Passo', year: 2014, price: 1500 });
removeCar(shop, 'Civic');
updatePrice(shop, 'Passo', 1800);
console.log(shop);
