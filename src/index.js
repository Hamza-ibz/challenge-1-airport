import Airport from "./airport.js";
import Plane from "../src/plane.js";

// Title
console.log(`=============== Demonstration of the Software ===============\n`);

console.log(`================ Maximum Capacity of airport ================\n`);

// Demonstration of user story 1:-
// As a user of the software,
// I want to know the maximum capacity of planes that the airport can hold,
// So that i know the number of landing space available.

console.log(`The user of the software can create an Airport with a maximum capacity`);
let airport = new Airport(15);
console.log(airport);
console.log("");
console.log(`The user can see the current maximum capacity of the airport which is "${airport.getMaxCapacity()}".`);

// Demonstration of user story 2:-
// As a user of the software,
// I want to adjust the capacity of planes that the airport can hold,
// So that i can manage the number of planes landing depending on airport condition.

console.log(`Due to extra landing space the user can increase the maximum capacity.`);
console.log(`Currently set at "${airport.getMaxCapacity()}" maximum capacity.`);
console.log(`Run Function....`);
airport.setMaxCapacity(30);
console.log(`Now the maximum capacity is "${airport.getMaxCapacity()}".\n`);

console.log(`The maximum capacity can also decrease, potentially due to factors such as construction work.`);
console.log(`Currently maximum capacity set at "${airport.getMaxCapacity()}".`);
console.log(`Run Function....`);
airport.setMaxCapacity(3);
console.log(`Now the maximum capacity is "${airport.getMaxCapacity()}".\n`);

// User story 2:- Edge case (incorrect value entered)
console.log(`The user cannot set maximum capacity to an incorrect value (e.g. negative number).`);
console.log(`The maximum capacity will not change. In fact, it will give an error message.`);
console.log(`Run Function with negative number....`);
airport.setMaxCapacity(-10);
console.log(`Provides with error: "${airport.setMaxCapacity(-20)}".`);
console.log(`The maximum capacity remains at "${airport.getMaxCapacity()}".\n`);

console.log(`When user changes maximum capacity.`);
console.log(`The user is informed with the following sentence:-`);
console.log(`"${airport.setMaxCapacity(3)}"\n`);

// Demonstration of user story 3:-
// As an Air Traffic Controller,
// I want to instruct a plane to land at the airport if the airport is not at full capacity,
// So that there is enough space for the plane to land passengers safely.
console.log(`=============== Plane Landing at The Airport ================\n`);

console.log(`currently there are no planes landed at the airport. This can be seen on the "landedPlane" list.`);
console.log(`"landedPlane" list: ` + JSON.stringify(airport.landedPlanes) + `\n`);

// User story 3:- land plane
console.log(`An Air Traffic Controller instruct a plane to land at the airport.`);
const plane1 = new Plane(1000);
airport.landPlane(plane1);
console.log(`The plane, with an id of "${plane1.idPlane}", is added to the "landedPlane" list.`);
console.log(`"landedPlane" list: ` + JSON.stringify(airport.landedPlanes) + `\n`);

// User story 3:- Edge case (land Helicopter) 
console.log(`The software only allows "Planes" to land at the airport.`);
console.log(`Therefore, An Air Traffic Controller cannot land anything other than a Plane.`);
console.log(`In fact, it will give an error message.`);
console.log(`Run Function to land a Helicopter instead of a Plane....`);
airport.landPlane("Helicopter");
console.log(`Provides with error: "${airport.landPlane("Helicopter")}".`);
console.log(`within the "landedPlane" list the helicopter is not added. `);
console.log(`"landedPlane" list: ` + JSON.stringify(airport.landedPlanes) + `\n`);

// User story 3:- Plane can't land at maximum capacity 
console.log(`An Air Traffic Controller cannot instruct a Plane to land when the airport has reached its maximum capacity.`);
console.log(`Currently maximum capacity set at "${airport.getMaxCapacity()}" with "${airport.landedPlanes.length}" plane landed.`);
console.log(`An Air Traffic Controller instructed another 2 Planes to land at the airport.`);
console.log(`Run Function to land 2 Planes....`);
const plane2 = new Plane(2000);
airport.landPlane(plane2);
const plane3 = new Plane(3000);
airport.landPlane(plane3);
console.log(`Now the airport reached maximum capacity.`);
console.log(`Currently maximum capacity set at "${airport.getMaxCapacity()}" with "${airport.landedPlanes.length}" plane landed.`);
console.log(`"landedPlane" list: ` + JSON.stringify(airport.landedPlanes));
console.log(`As Air Traffic Controller instructs another Plane to land at the airport.`);
const plane4 = new Plane(4000);
console.log(`The software provides with the error: "${airport.landPlane(plane4)}".`);
console.log(`"landedPlane" list remains the same: ` + JSON.stringify(airport.landedPlanes) + `\n`);

// Demonstration of user story 4:-
// As an Air Traffic Controller,
// I want to instruct a plane to land if the plane isn't already at the airport,
// So that i don't cause confusion by instructing a landed plane to land again.

console.log(`The software only allows a plane to land if the plane isn't already landed at the airport.`);
console.log(`Therefore, An Air Traffic Controller cannot land a plane that is already landed.`);
console.log(`In fact, it will give an error message.`);
console.log(`The plane that are landed are: ` + JSON.stringify(airport.landedPlanes));
console.log(`Run Function to land a landed plane (${JSON.stringify(plane3)})....`);
airport.landPlane(plane3);
console.log(`Provides with the error: "${airport.landPlane(plane3)}".\n`);

const plane5 = new Plane(5000);
console.log(`Run Function to land a plane (${JSON.stringify(plane5)}) that is not already landed....`);
airport.setMaxCapacity(4);
airport.landPlane(plane5);
console.log(`The plane is added  to the list: ` + JSON.stringify(airport.landedPlanes) + `\n`);


// Demonstration of user story 5:-
// As an Air Traffic Controller,
// I want to instruct a plane to take off from an airport as long as it is currently at the airport,
// So that the plane can leave safely.
console.log(`=============== Plane Take-Off from the airport ===============\n`);

console.log(`The software only allows a plane to take-off from the airport as long as it is currently at the airport "landedPlane" list.`);
console.log(`Currently there is "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes));
console.log(`An Air Traffic Controller instruct a plane to take-off.`);
console.log(`Run Function for plane ` + JSON.stringify(plane3) + ` to take-off....`);
airport.planeTakeOff(plane3);
console.log(`Now the airport has "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes) + `.\n`);

// User story 5:- Plane can't take-off if its not at the airport (gives error message).
console.log(`An Air Traffic Controller cannot instruct a plane to take-off if its not at the airport "landedPlane" list.`);
console.log(`In fact, it will give an error message.`);
console.log(`Currently there is "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes));
console.log(`Run Function for a plane (${JSON.stringify(plane3)}) that is not at the airport to take-off....`);
airport.planeTakeOff(plane3);
console.log(`Provides with the error: "${airport.planeTakeOff(plane3)}".\n`);


// Demonstration of user story 6:-
// As an Air Traffic Controller,
// I want to prevent planes from landing at the airport during stormy weather conditions,
// So the aircraft and passengers are safe, minimizing the risk of accidents during landing.
console.log(`================== Stormy Weather Conditions =================\n`);

console.log(`The Air Traffic Controllers are unable to land a plane during stormy conditions.`);
console.log(`Currently stormy weather is "${airport.stormy}" and there is "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes));
console.log(`An Air Traffic Controller instruct a plane to land.`);
console.log(`Run Function for plane ` + JSON.stringify(plane3) + ` to land....`);
airport.landPlane(plane3);
console.log(`Now the airport has "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes) + `.\n`);

// User story 6:- Plane can't land if the weather is stormy (gives error message).
console.log(`An Air Traffic Controller cannot instruct a plane to land if the weather is stormy.`);
console.log(`In fact, it will give an error message.`);
console.log(`Currently there is "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes));
console.log(`Run Function for a plane to land in stormy weather....`);
airport.setMaxCapacity(10);
airport.setStormy(true);
const plane6 = new Plane(6000);
airport.landPlane(plane6);
console.log(`Provides with the error: "${airport.landPlane(plane4)}".\n`);

// Demonstration of user story 7:-
// As an Air Traffic Controller,
// I want to ensure that planes cannot take - off from the airport when the weather conditions are stormy,
// So the aircraft and passengers can reach their destination safely, minimizing the risk of accidents during the flight.

// User story 7:- Plane can't take-off if the weather is stormy (gives error message).
console.log(`An Air Traffic Controller cannot instruct a plane to take-off if the weather is stormy.`);
console.log(`In fact, it will give an error message.`);
console.log(`Currently there is "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes));
console.log(`Run Function for a plane to take-off in stormy weather....`);
airport.setStormy(true);
airport.planeTakeOff(plane5);
console.log(`Provides with the error: "${airport.landPlane(plane4)}".\n`);

console.log(`The Air Traffic Controllers are only able to instruct a plane to take off if there is no stormy conditions.`);
airport.setStormy(false);
console.log(`Currently stormy weather is "${airport.stormy}" and there is "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes));
console.log(`An Air Traffic Controller instruct a plane to take-off.`);
console.log(`Run Function for plane ` + JSON.stringify(plane5) + ` to take-off....`);
airport.planeTakeOff(plane5);
console.log(`Now the airport has "${airport.landedPlanes.length}" planes: ` + JSON.stringify(airport.landedPlanes) + `.\n`);








