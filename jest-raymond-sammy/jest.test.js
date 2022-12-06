//Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// describe("areYouTired", () => {
//     it("returns drink coffee or keep working based on input", () => {
//       expect(areYouTired("yes")).toEqual("drink coffee")
//       expect(areYouTired("no")).toEqual("keep working")
//     })
//   }) 

// Test Failed:
//   ./jest.test.js
//   areYouTired
//     ✕ returns drink coffee or keep working based on input (1 ms)

//   ● areYouTired › returns drink coffee or keep working based on input

//     ReferenceError: areYouTired is not defined

// Create the function that will make the test pass.

// const areYouTired = (string) => {
//     if (string === "yes") {
//       return "drink coffee"
//     } else if (string === "no") {
//       return "keep working"
//     }
//   }

// Test Passed:
//   ./jest.test.js
//   areYouTired
//     ✓ returns drink coffee or keep working based on input (1 ms)

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("areYouStressed", () => {
//     it("returns relax or keep going based on input", () => {
//       expect(areYouStressed("yes")).toEqual("relax")
//       expect(areYouStressed("no")).toEqual("keep going")
//     })
//   })  
//   ./jest.test.js
//   areYouStressed
//     ✕ returns relax or keep going based on input

//   ● areYouStressed › returns relax or keep going based on input

//     ReferenceError: areYouStressed is not defined

// Create the function that will make the test pass.

// const areYouStressed = (string) => {
// if (string === "yes") {
//           return "relax"
//      } else if (string === "no") {
//        return "keep going"
//     }
//       }
//       ./jest.test.js
//   areYouStressed
//     ✓ returns relax or keep going based on input (1 ms)

// Write the test for a function that returns "in budget" if a price is lower than $300.

// describe("areYouBroke", () => {
//     it("returns in budget", () => {
//         let item1 = 250
//       expect(areYouBroke(item1<300)).toEqual("in budget")
//     })
//   })  

// Test Failed:
//   ./jest.test.js
//   areYouBroke
//     ✕ returns in budget

//   ● areYouBroke › returns in budget

// Create the function that will make the test pass.

// const areYouBroke = (purchase) => {
//     if (purchase < 300) {
//     return "in budget" 
//     } else {
//         return "not in budget"
//     }

// } 

// Test Passed:
// ./jest.test.js
//   areYouBroke
//     ✓ returns in budget (1 ms)
// Write the test for a function that takes in two numbers and returns the smaller number.
// describe ("smallNumber", () => {
//     it ("takes in two numbers and returns the smaller number", () => {
//         let num1 = 20
//         let num2 = 40

//         expect(smallNumber(num1, num2)).toBeLessThan(num1)
//     })
// })

// Test Failed:
// ./jest.test.js
// smallNumber
//   ✕ takes in two numbers and returns the smaller number

// Create the function that will make the test pass.

// const smallNumber = (a, b) => {
//     if (a > b) {
//         return b
//     } else {
//         return a
//     }
// }
// Write the test for a function that takes in one numbers and returns whether the number is odd.

// describe('isOdd', () => {
//     it('takes in one number and returns whether the number is odd', () => {
//         let num = 5
        
//         expect(isOdd(num !== 0)).toEqual('the number is odd')
//     })
// })

// Failed Test:
// ./jest.test.js
// isOdd
//   ✕ takes in one number and returns whether the number is odd (2 ms)

// ● isOdd › takes in one number and returns whether the number is odd

// Create the function that will make the test pass.
// let num1 = 5
// const isOdd = (number) => {
//     return number !== 0 ? 'the number is odd' : 'the number is even'
// }
// Passed Test:
// ./jest.test.js
//   isOdd
//     ✓ takes in one number and returns whether the number is odd (4 ms)

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe('fruitColor', () => {
    it('takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.', () => {
        let fruit1 = 'banana'
        let fruit2 = 'apple'
        let fruit3 = 'grape'

        expect(fruitColor(fruit1)).toEqual('yellow')
        expect(fruitColor(fruit2)).toEqual('red')
        expect(fruitColor(fruit3)).toEqual('purple')
    })
})

// Test Failed:
// ./jest.test.js
//   fruitColor
//     ✕ takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape. (1 ms)

//   ● fruitColor › takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

//     ReferenceError: fruitColor is not defined

// Create the function that will make the test pass

const fruitColor = (fruit) => {
    return fruit === 'banana' ? 'yellow' : fruit === 'apple' ? 'red' : 'purple'
}

// Test Passed:
// ./jest.test.js
//   fruitColor
//     ✓ takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape. (3 ms)

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