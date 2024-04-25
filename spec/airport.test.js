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
        let actual = airport.getMaxCapacity();

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
        testName = "Test 2 - When software has negative number as maximum capacity, the maximum capacity sets to 0:";
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
};

userStory1();
