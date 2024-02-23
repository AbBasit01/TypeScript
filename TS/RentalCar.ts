//Build a program to manage car rentals for a rental agency.
// Define interfaces for cars with properties like make, model, year, price, etc.
// Implement functions to add new cars, remove cars, update car details,
// calculate rental fees, and manage rental bookings.

interface Car{
    make: string;
    model: string;
    year: number;
    price: number;
    details?: string; 
}

interface AvailabeCars{
    Cars: Car[];
}

function addCar(AddIn:AvailabeCars , NewCar:Car):void{
    AddIn.Cars.push(NewCar);
}

function removeCar(RemoveFrom:AvailabeCars , CarName:string):void{
    RemoveFrom.Cars = RemoveFrom.Cars.filter((car) => car.model !== CarName)
}

function updatePrice(UpdateIn:AvailabeCars , CarModel: string , NewPrice: number):void{
    var car = UpdateIn.Cars.find(car => car.model === CarModel);
    if (car){
        car.price = NewPrice
    } 
}

function calculatePrice(days: number , price: number):number{
    return(days*price);
}

var shop:AvailabeCars = {
    Cars:[
       { make: 'Honda' , model: 'Civic' , year: 2020 , price:5000}
    ]
}

addCar(shop, {make: 'Toyota' , model: 'Passo' , year: 2014 , price:1500})

removeCar(shop, 'Civic')

updatePrice(shop, 'Passo' , 1800)
console.log(shop)
