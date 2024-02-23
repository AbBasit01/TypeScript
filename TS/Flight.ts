//Design a program for booking flights.
//Define interfaces for flights with properties like flight number, destination, departure time, etc.
//Implement functions to book flights, cancel bookings, search for available flights, and display flight details.

//Type Declaration
interface Flight{
    flightNumber: string;
    destination: string;
    departureTime: Date
}

interface Passenger{
    name: string;
    id: string;
    flight:Flight[]
}

interface Airlines{
    passengers: Passenger[];
    flights: Flight[];
}

//functions
function addPassenger(airlinesName:Airlines , passenger:Passenger){
    airlinesName.passengers.push(passenger);
}

function bookFlight(airlinesName:Airlines , passengerID: string , flightNo: string){
    let flight = airlinesName.flights.find((f) => f.flightNumber === flightNo);
    let passenger = airlinesName.passengers.find((p) => p.id === passengerID)
    if (flight && passenger){
        passenger.flight.push(flight);
    }
}

function addFlight(airlinesName:Airlines , flightNo:Flight){
    airlinesName.flights.push(flightNo);
}

function removeFlight(airlinesName:Airlines, flightNo:string){
    airlinesName.flights = airlinesName.flights.filter(f => f.flightNumber !== flightNo)
}

function updateDepTime(airlinesName:Airlines , flightNo: string , newtime: Date){
    var plane = airlinesName.flights.find(t => t.flightNumber === flightNo)
    if(plane){
        plane.departureTime = newtime
    }
}

function searchFlight(airlinesName:Airlines){
    let availableFlights = airlinesName.flights;
    return availableFlights;
}

//initiation
var PIA:Airlines = {
    passengers: [],
    flights:[
        {flightNumber: 'PK1234' , destination: 'Karachi' , departureTime: new Date('2024-02-23')},
        {flightNumber: 'PK1236' , destination: 'Lahore' , departureTime: new Date('2024-02-23')},
        {flightNumber: 'PK1237' , destination: 'Multan' , departureTime: new Date('2024-02-23')},
        {flightNumber: 'PK1238' , destination: 'Peshawar' , departureTime: new Date('2024-02-24')},
        {flightNumber: 'PK1239' , destination: 'Karachi' , departureTime: new Date('2024-02-24')},
        {flightNumber: 'PK1230' , destination: 'Islamabad' , departureTime: new Date('2024-02-25')}
    ]
}

addPassenger( PIA , {name:'Abdul' , id:'01' , flight:[]})

addFlight(PIA , {flightNumber: 'PK1235' , destination: 'Islamabad' , departureTime: new Date('2024-02-26')})

bookFlight(PIA ,'01' , 'PK1234')

console.log(PIA)

console.log(PIA.passengers)

console.log(searchFlight(PIA))