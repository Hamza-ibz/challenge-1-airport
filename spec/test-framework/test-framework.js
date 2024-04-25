
// Matchers are functions that take an expected and actual value and
// make an assertion about the 2 values

export const assertEquals = (actual, expected) => actual === expected; //! Implicit return

export const assertTrue = (actual) => actual === true;

export const assertFalse = (actual) => actual === false;

export const assertNull = (actual) => actual === null;

export const assertUndefined = (actual) => actual === undefined;

export const assertNaN = (actual) => isNaN(actual);


// export const it = (description, testFunc) => {
//     try {
//         testFunc();
//         console.log("\x1b[32m%s\x1b[0m", `\t${description}`);
//     } catch (error) {
//         console.error("\x1b[31m%s\x1b[0m", `\t${description}`);
//         console.error("\x1b[31m%s\x1b[0m", `\t\t${error.message}`);
//         console.log(error.stack);
//     }
// };

// export const xit = (description) => {
//     console.log("\x1b[33m%s\x1b[0m", `\tTEST SKIPPED: ${description}`);
// };
