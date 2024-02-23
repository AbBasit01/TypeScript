"use strict";
//Design a program for booking flights.
//Define interfaces for flights with properties like flight number, destination, departure time, etc.
//Implement functions to book flights, cancel bookings, search for available flights, and display flight details.
//functions
function addPassenger(airlinesName, passenger) {
    airlinesName.passengers.push(passenger);
}
function bookFlight(airlinesName, passengerID, flightNo) {
    let flight = airlinesName.flights.find((f) => f.flightNumber === flightNo);
    let passenger = airlinesName.passengers.find((p) => p.id === passengerID);
    if (flight && passenger) {
        passenger.flight.push(flight);
    }
}
function addFlight(airlinesName, flightNo) {
    airlinesName.flights.push(flightNo);
}
function removeFlight(airlinesName, flightNo) {
    airlinesName.flights = airlinesName.flights.filter(f => f.flightNumber !== flightNo);
}
function updateDepTime(airlinesName, flightNo, newtime) {
    var plane = airlinesName.flights.find(t => t.flightNumber === flightNo);
    if (plane) {
        plane.departureTime = newtime;
    }
}
function searchFlight(airlinesName) {
    let availableFlights = airlinesName.flights;
    return availableFlights;
}
//initiation
var PIA = {
    passengers: [],
    flights: [
        { flightNumber: 'PK1234', destination: 'Karachi', departureTime: new Date('2024-02-23') },
        { flightNumber: 'PK1236', destination: 'Lahore', departureTime: new Date('2024-02-23') },
        { flightNumber: 'PK1237', destination: 'Multan', departureTime: new Date('2024-02-23') },
        { flightNumber: 'PK1238', destination: 'Peshawar', departureTime: new Date('2024-02-24') },
        { flightNumber: 'PK1239', destination: 'Karachi', departureTime: new Date('2024-02-24') },
        { flightNumber: 'PK1230', destination: 'Islamabad', departureTime: new Date('2024-02-25') }
    ]
};
addPassenger(PIA, { name: 'Abdul', id: '01', flight: [] });
addFlight(PIA, { flightNumber: 'PK1235', destination: 'Islamabad', departureTime: new Date('2024-02-26') });
bookFlight(PIA, '01', 'PK1234');
// console.log(PIA.flights)
// console.log(PIA.passengers)
console.log(searchFlight(PIA));
