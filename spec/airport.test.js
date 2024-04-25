import Airport from "../src/airport.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";

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
        //* When software has negative number as maximum capacity, the maximum capacity sets to 0

        // Arrange
        testName = "Test 2 - A negative number as maximum capacity, sets maximum capacity to 0:";
        const airport = new Airport(-30);
        expected = 0;

        // Act
        let actual = airport.getMaxCapacity();

        // Assert
        result = assertEquals(actual, expected);

        // Report
        console.log(result ? `${testName} [result = Pass]` : `${testName} [result = Fail]`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        afterEach();
    };
    test1();
    test2();
    console.log("\n\n")
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
        //* user is able to adjust the maximum capacity, of planes that the airport can hold, multiple times

        // Arrange
        testName = "Test 3 - Adjust the maximum capacity of planes that the airport can hold multiple times:";
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



    test1();
    test2();
    test3();
    console.log("\n\n")
};

userStory1();
userStory2();
