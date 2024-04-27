import Airport from "./airport.js";
import Plane from "../src/plane.js";


console.log(`=============== Demonstration of the Software ===============\n`);

// demo of user story 1

console.log(`The user of the software can create an Airport with a maximum capacity`);
let airport = new Airport(15);
console.log(airport);
console.log("");

console.log(`The user can see the current maximum capacity of the airport which is "${airport.getMaxCapacity()}".`);

//user story 2

console.log(`Due to extra landing space the user can increase the maximum capacity.`);
console.log(`Currently set at "${airport.getMaxCapacity()}" maximum capacity.`);
console.log(`Run Function....`);
airport.setMaxCapacity(30);
console.log(`Now the maximum capacity is "${airport.getMaxCapacity()}".\n`);

console.log(`The maximum capacity can also decrease, potentially due to factors such as construction work.`);
console.log(`Currently maximum capacity set at "${airport.getMaxCapacity()}".`);
console.log(`Run Function....`);
airport.setMaxCapacity(20);
console.log(`Now the maximum capacity is "${airport.getMaxCapacity()}".\n`);


console.log(`The user cannot set maximum capacity to an incorrect value (e.g. negative number).`);
console.log(`The maximum capacity will not change. In fact, it will give an error message.`);
console.log(`Run Function with negative number....`);
airport.setMaxCapacity(-10);
console.log(`Provides with error: "${airport.setMaxCapacity(-20)}".`);
console.log(`The maximum capacity remains at "${airport.getMaxCapacity()}".\n`);

console.log(`When user changes maximum capacity.`);
console.log(`The user is informed with the following sentence:-`);
console.log(`"${airport.setMaxCapacity(20)}"\n`);

//demo user story 3

console.log(`currently there are no planes landed at the airport. This can be seen on the "landedPlane" list.`);
console.log(`"landedPlane" list: ${airport.landedPlanes}/n`);

console.log(`An Air Traffic Controller instruct a plane to land.`);
console.log(`The plane is added to the "landedPlane" list.`);








