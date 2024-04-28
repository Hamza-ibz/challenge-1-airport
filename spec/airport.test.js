import Airport from "../src/airport.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";
import Plane from "../src/plane.js";

// Initializing repeated Variables
let testName, expected, actual, result;

// Clean up AFTER EACH test Function
const afterEach = () => {
    testName = undefined;
    expected = undefined;
    actual = undefined;
    result = undefined;
};

const userStory1 = function () {
    console.log(`========================== User Story 1 ==========================`);

    const test1 = function () {
        //? TEST 1 
        //* User can see maximum capacity of planes the airport can hold

        // Arrange
        testName = "Test 1 - Check maximum capacity of planes the airport can hold:";
        const airport = new Airport(20);
        expected = 20;

        // Act
        actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test2 = function () {
        //? TEST 2 
        //* When software has negative number as maximum capacity, the software will give default maximum capacity

        // Arrange
        testName = "Test 2 - A negative number as maximum capacity, will give default maximum capacity:";
        const airport = new Airport(-35);
        expected = 10;

        // Act
        let actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test3 = function () {
        //? TEST 3 
        //* maximum capacity set to null will give default maximum capacity.

        // Arrange
        testName = "Test 3 - Maximum capacity set to null will give default maximum capacity:";
        const airport = new Airport(null);
        expected = 10;

        // Act
        actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    test1();
    test2();
    test3();
    console.log("\n")
};

const userStory2 = function () {
    console.log(`========================== User Story 2 ==========================`);

    const test1 = function () {
        //? TEST 1 
        //* user is able to Increase the maximum capacity of planes that the airport can hold

        // Arrange
        testName = "Test 1 - Increase the maximum capacity of planes that the airport can hold:";
        const airport = new Airport(20);
        expected = 30;

        // Act
        airport.setMaxCapacity(30);
        actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test2 = function () {
        //? TEST 2 
        //* user is able to Decrease the maximum capacity of planes that the airport can hold

        // Arrange
        testName = "Test 2 - Decrease the maximum capacity of planes that the airport can hold:";
        const airport = new Airport(20);
        expected = 5;

        // Act
        airport.setMaxCapacity(5);
        actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test3 = function () {
        //? TEST 3 
        //* user is able to adjust the maximum capacity of planes that the airport can hold, multiple times

        // Arrange
        testName = "Test 3 - Adjust the maximum capacity of planes that the airport can hold, multiple times:";
        const airport = new Airport(20);
        expected = 25;

        // Act
        airport.setMaxCapacity(5);
        airport.setMaxCapacity(25);
        actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test4 = function () {
        //? TEST 4 
        //* Change maximum capacity to a negative number will not change maximum capacity.

        // Arrange
        testName = "Test 4 - Change maximum capacity to a negative number will not change maximum capacity:";
        const airport = new Airport(12);
        expected = 12;

        // Act
        airport.setMaxCapacity(-5);
        actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test5 = function () {
        //? TEST 5 
        //* Change maximum capacity to null will not change maximum capacity.

        // Arrange
        testName = "Test 5 - Change maximum capacity to null will not change maximum capacity:";
        const airport = new Airport(20);
        expected = 20;

        // Act
        airport.setMaxCapacity(null);
        actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test6 = function () {
        //? TEST 6
        //* maximum capacity set to incorrect value will alert the user.

        // Arrange
        testName = "Test 6 - Maximum capacity set to incorrect value will alert the user:";
        expected = "Incorrect value given, please check data";

        // Act
        const airport = new Airport(null);
        actual = airport.setMaxCapacity(null);;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test7 = function () {
        //? TEST 7
        //* maximum capacity set to correct value will inform the user.

        // Arrange
        testName = "Test 7 - Maximum capacity set to correct value will inform the user:";
        const airport = new Airport(30);
        expected = `Airport changed maximum capacity to 20`;

        // Act
        actual = airport.setMaxCapacity(20);

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    test1();
    test2();
    test3();
    test4();
    test5();
    test6();
    test7();

    console.log("\n")
};

const userStory3 = function () {
    console.log(`========================== User Story 3 ==========================`);

    const test1 = function () {
        //? TEST 1 
        //* Landed planes are added to the airport 'planes landed list'

        // Arrange
        testName = "Test 1 - Check if landed planes are added to the airport 'landedPlanes' list:";
        const airport = new Airport();
        expected = 2;

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        actual = airport.landedPlanes.length;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test2 = function () {
        //? TEST 2 
        //* Check that only planes can land at the airport

        // Arrange
        testName = "Test 2 - Check that only planes can land at the airport:";
        const airport = new Airport();
        expected = 2;

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const spaceShip = "spaceship";
        airport.landPlane(spaceShip);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        actual = airport.landedPlanes.length;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test3 = function () {
        //? TEST 3 
        //* Ensure that planes are unable to land when the airport has reached its maximum capacity

        // Arrange
        testName = "Test 3 - Ensure that planes are unable to land when the airport has reached maximum capacity:";
        const airport = new Airport(2);
        expected = 2;

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        const plane3 = new Plane(3000);
        airport.landPlane(plane3);

        actual = airport.landedPlanes.length;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test4 = function () {
        //? TEST 4
        //* Alerts Air Traffic Controller when planes are unable to land

        // Arrange
        testName = "Test 4 - Alerts Air Traffic Controller when planes are unable to land:";
        const airport = new Airport(2);
        expected = "Error with landing please check data";

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        const plane3 = new Plane(3000);

        actual = airport.landPlane(plane3);;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    test1();
    test2();
    test3();
    test4();
    console.log("\n")
};

const userStory4 = function () {
    console.log(`========================== User Story 4 ==========================`);

    const test1 = function () {
        //? TEST 1 
        //* Check if the plane landed is actually added to the 'landedPlanes' list

        // Arrange
        testName = "Test 1 - Check if the plane landed is actually added to the 'landedPlanes' list:";
        const airport = new Airport();
        expected = true;

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        actual = airport.landedPlanes.includes(plane1);

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test2 = function () {
        //? TEST 2 
        //* Air Traffic Controller only instruct a plane to land if the plane isn't already at the airport 'landedPlanes' list

        // Arrange
        testName = "Test 2 - Instruct a plane to land if the plane isn't already landed at the airport.";
        const airport = new Airport();
        expected = 2;

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        airport.landPlane(plane1);

        actual = airport.landedPlanes.length;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test3 = function () {
        //? TEST 3 
        //* Inform Air Traffic Controller when a plane landed and added to 'landedPlanes' list

        // Arrange
        testName = "Test 3 - Inform Air Traffic Controller when a plane landed and added to 'landedPlanes' list:";
        const airport = new Airport();
        expected = "Plane has landed";

        // Act
        const plane1 = new Plane(1000);
        // airport.landPlane(plane1);

        actual = airport.landPlane(plane1);;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    test1();
    test2();
    test3();
    console.log("\n")
};

const userStory5 = function () {
    console.log(`========================== User Story 5 ==========================`);

    const test1 = function () {
        //? TEST 1 
        //* Check if planes can take off from the airport by removing it from the 'landedPlanes' list

        // Arrange
        testName = "Test 1 - Check if planes can take off from the airport by removing it from the 'landedPlanes' list:";
        const airport = new Airport();
        expected = 0;

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);
        airport.planeTakeOff(plane1);


        actual = airport.landedPlanes.length;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test2 = function () {
        //? TEST 2 
        //* Planes only can take off from the airport as long as it is currently at the airport

        // Arrange
        testName = "Test 2 - Planes only can take off from the airport as long as it is currently at the airport:";
        const airport = new Airport();
        expected = 2;

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        const plane3 = new Plane(3000);
        airport.landPlane(plane3);

        const plane4 = new Plane(4000);

        airport.planeTakeOff(plane1);
        airport.planeTakeOff(plane4);

        actual = airport.landedPlanes.length;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };


    const test3 = function () {
        //? TEST 3
        //* Verify that the correct plane took-off/removed from the airport 'landedPlanes' list.

        // Arrange
        testName = "Test 3 - Verify that the correct plane took-off/removed from the airport 'landedPlanes' list:";
        const airport = new Airport();
        expected = false;

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        const plane3 = new Plane(3000);
        airport.landPlane(plane3);

        airport.planeTakeOff(plane2);


        actual = airport.landedPlanes.includes(plane2);

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test4 = function () {
        //? TEST 4
        //* Alert Air Traffic Controller when Plane cant take-off

        // Arrange
        testName = "Test 4 - Alert Air Traffic Controller when Plane cant take-off:";
        const airport = new Airport();
        expected = "Error with take-off please check data";

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        const plane3 = new Plane(3000);
        airport.landPlane(plane3);

        const plane4 = new Plane(4000);

        airport.planeTakeOff(plane1);

        actual = airport.planeTakeOff(plane4);;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };

    const test5 = function () {
        //? TEST 5
        //* Inform Air Traffic Controller when Plane takes-off

        // Arrange
        testName = "Test 5 - Inform Air Traffic Controller when Plane takes-off:";
        const airport = new Airport();
        expected = "Plane has taken off";

        // Act
        const plane1 = new Plane(1000);
        airport.landPlane(plane1);

        const plane2 = new Plane(2000);
        airport.landPlane(plane2);

        const plane3 = new Plane(3000);
        airport.landPlane(plane3);

        airport.planeTakeOff(plane1);

        actual = airport.planeTakeOff(plane3);;

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };


    test1();
    test2();
    test3();
    test4();
    test5();
    console.log("\n")
};

userStory1();
userStory2();
userStory3();
userStory4();
userStory5();
