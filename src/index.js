import Airport from "./airport.js";
import Plane from "../src/plane.js";


console.log(`=============== Demonstration of the Software ===============\n`);

// demo of user story 1: test 1

console.log(`The user of the software can create an Airport with a maximum capacity`);
let airport = new Airport(15);
console.log(airport);

console.log(`The user can see the current maximum capacity of the airport is "${airport.getMaxCapacity()}".`);

