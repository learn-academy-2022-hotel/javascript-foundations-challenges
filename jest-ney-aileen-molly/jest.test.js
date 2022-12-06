// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
//prompt write a function that will return "drink coffee" if you are tired and "keep working" if you are not tired
//input: self- invoking, none
//output: string 
//declare a fuction name coffee 

describe ("coffee", () => {
    it ("coffee response", () => {
        expect(coffee("NO")).toEqual("keep working")
        expect(coffee("YES")).toEqual("drink coffee")
    })
})

//red
// ● coffee › coffee response

// ReferenceError: coffee is not defined

const coffee = (string) => {
    if (string.toUpperCase() === "NO"){
        return "keep working"
    }
    else if (string.toUpperCase() === "YES"){
 
        return "drink coffee"
}
}
// PASS  jest-ney-aileen-molly/jest.test.js
// coffee
//   ✓ coffee response (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.142 s, estimated 1 s

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.
// input: strings
//output:strings
// create a fucntion that takes in a string and returns a string 
// describe ("stressTest", () => {
//     it ("asked if you are stressed", () => {
//         expect(stressTest("no")).toEqual("keep going")
//         expect(stressTest("yes")).toEqual("relax")
//     })
// })
// stressTest
// ✕ asked if you are stressed

// ● stressTest › asked if you are stressed

//   ReferenceError: stressTest is not defined

// const stressTest = (string) => {
//     if (string.toUpperCase() === "NO"){
//         return "keep going"
//     }
//     else if (string.toUpperCase() === "YES"){
//         return "relax"
// }
// }
// PASS  jest-ney-aileen-molly/jest.test.js
// coffee
//   ✓ coffee response (1 ms)
// stressTest
//   ✓ asked if you are stressed (1 ms)

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
describe ("inBudget", (value) => {
    it ("checks to see if it is in budget", () => {
        expect(inBudget(value < 300)).toEqual("in budget")
    })
})

// ✕ checks to see if it is in budget

// ● inBudget › checks to see if it is in budget

//   ReferenceError: inBudget is not defined

const inBudget = (value) => {
    if (value < 300){
        return "in budget"
}
}

// PASS  jest-ney-aileen-molly/jest.test.js
// coffee
//   ✓ coffee response (1 ms)
// inBudget
//   ✓ checks to see if it is in budget

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe ("inBudget", (value) => {
    it ("checks to see if it is in budget", () => {
        expect(inBudget(value < 300)).toEqual("in budget")
    })
})

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
