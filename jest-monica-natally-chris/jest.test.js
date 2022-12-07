// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

describe ("areYouTired", () => {
    it ("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
        expect (areYouTired("yes")).toEqual("drink coffee")
        expect (areYouTired("no")).toEqual("keep working")
    })
})
// FAIL  ./jest.test.js
// areYouTired
//   ✕ returns 'drink coffee' if you are tired and 'keep working' if you are not tired

// ● areYouTired › returns 'drink coffee' if you are tired and 'keep working' if you are not tired

//   ReferenceError: areYouTired is not defined

// PSEUDOCODE
    // declare function called areYouTired
    // input: string
    // output: string
    // if 'yes' then return 'drink coffee'
    // if 'no' then return 'keep working'

const areYouTired = (string) => {
    if (string.toLowerCase() === 'yes'){
        return "drink coffee"
    } else if(string.toLowerCase() === 'no'){
        return "keep working"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

describe ("areYouStressed", () => {
    it ("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
        expect (areYouStressed("yes")).toEqual("relax")
        expect (areYouStressed("no")).toEqual("keep going")
    })
})

// FAIL  ./jest.test.js
// areYouTired
//   ✓ returns 'drink coffee' if you are tired and 'keep working' if you are not tired (1 ms)
// areYouStressed
//   ✕ returns 'relax' if you are stressed and 'keep going' if you are not stressed

// ● areYouStressed › returns 'relax' if you are stressed and 'keep going' if you are not stressed

//   ReferenceError: areYouStressed is not defined

const areYouStressed = (string) => {
    if (string.toLowerCase() === 'yes'){
        return 'relax'
    } else if (string.toLowerCase() === 'no'){
        return 'keep going'
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.


describe ("inBudget", () => {
    it ("returns 'in budget' if a price is lower than 300", () => {
        expect (inBudget(180)).toEqual("in budget")
        expect (inBudget(400)).toEqual("not in budget")
    })
})

// FAIL  ./jest.test.js
// areYouTired
//   ✓ returns 'drink coffee' if you are tired and 'keep working' if you are not tired (1 ms)
// areYouStressed
//   ✓ returns 'relax' if you are stressed and 'keep going' if you are not stressed
// inBudget
//   ✕ returns 'in budget' if a price is lower than $300

// ● inBudget › returns 'in budget' if a price is lower than $300

//   ReferenceError: inBudget is not defined

const inBudget = (value1) => {

    if (value1 < 300){
        return "in budget"
    } else if (value1 >= 300){
        return "not in budget"
    }
}

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe ("smallerNumber", () => {
    it ("takes in two numbers and returns the smaller number", () => {
        expect (smallerNumber(2, 5)).toEqual('2 is smaller')
    })
})

// FAIL  ./jest.test.js
// areYouTired
//   ✓ returns 'drink coffee' if you are tired and 'keep working' if you are not tired (1 ms)
// areYouStressed
//   ✓ returns 'relax' if you are stressed and 'keep going' if you are not stressed
// smallerNumber
//   ✕ takes in two numbers and returns the smaller number

// ● smallerNumber › takes in two numbers and returns the smaller number

//   ReferenceError: smallerNumber is not defined

const smallerNumber = (num1, num2) => {
    if(num1 < num2){
        return `${num1} is smaller`
    } else if (num1 > num2){
        return `${num2} is smaller`
    } else {
        return "they are the same"
    }
}

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