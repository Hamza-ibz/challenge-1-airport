import Airport from "./airport.js";

console.log(`Airport created with a maximum capacity`);
let airport = new Airport(15);
console.log(airport);

console.log(`The user can see the current maximum capacity of the airport is ${airport.getMaxCapacity()}.`);