// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// describe("areYouTired", () => {
//     it("are you tired?", () => {
//         expect(areYouTired("yes")).toEqual("drink coffee")
//         expect(areYouTired("no")).toEqual("keep working")
//     })
// })
// Create the function that will make the test pass.
// const areYouTired = (string) => {
//     if (string === "yes"){
//         return "drink coffee"
//     } else if(string === "no"){
//         return "keep working"
//     }
// }


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// describe("areYouStressed", () => {
//     it("are you stressed?", () => {
//         expect(areYouStressed("yes")).toEqual("relax")
//         expect(areYouStressed("no")).toEqual("keep going")
//     })
// })

// Create the function that will make the test pass.
// const areYouStressed = (string) => {
//         if (string === "yes"){
//             return "relax"
//         } else if(string === "no"){
//             return "keep going"
//         }
//     }

// Write the test for a function that returns "in budget" if a price is lower than $300.
// describe("inBudget", () => {
//     it("how much is the item?", () => {
//         const price1 = 350
//         const price2 = 250
//         expect(inBudget(price1)).toEqual("not in budget")
//         expect(inBudget(price2)).toEqual("in budget")
//     })
// })

// Create the function that will make the test pass.
// const inBudget = (value) => {
//             if (value >= 300){
//                 return "not in budget"
//             } else if(value < 300){
//                 return "in budget"
//             }
//         }
      
//Pseudo Code
//Function: declare a function called inBudget 
//Input: a number
//Output: string 

//if the item is greater than or equal to 300 it is out of budget, if the item is less than 300 it is in budget. Use conditional statements to produce expected return

// Write the test for a function that takes in two numbers and returns the smaller number.
// describe("smallNumber", () => {
//         it("What are your values?", () => {
//             const num1 = 5
//             const num2 = 34
//             expect(smallNumber(num1, num2)).toEqual(num1)
//             expect(smallNumber(num2, num1)).toEqual(num1)
//         })
//     })

// Create the function that will make the test pass.
// const smallNumber = (num1, num2) => {
//                 if (num1 > num2){
//                     return num2
//                 } else if(num2 > num1){
//                     return num1
//                 }
//             }


// Write the test for a function that takes in one numbers and returns whether the number is odd.
// describe("oddNumber", () => {
//     it("What is your value?", () => {
//         const num1 = 35
//         const num2 = 34
//         expect(oddNumber(num1)).toEqual("odd")
//         expect(oddNumber(num2)).toEqual("not odd")
//     })
// })

// Create the function that will make the test pass.
// const oddNumber = (num1) => {
//      if (num1 % 2 === 1){
//     return "odd"
//     } else if(num1 % 2 === 0){
//     return "not odd"
//     }
// }



// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColor", () => {
    it("What is your fruit?", () => {
        const fruit1 = "banana"
        const fruit2 = "apple"
        const fruit3 = "grape"
        expect(fruitColor(fruit1)).toEqual("yellow")
        expect(fruitColor(fruit2)).toEqual("red")
        expect(fruitColor(fruit3)).toEqual("purple")   
     })
})


// Create the function that will make the test pass.
const fruitColor = (fruit1) => {
         if (fruit1 = "banana"){
        return "yellow"
        } else if(fruit1 = "apple"){
        return "red"
        } else if(fruit1 = "grape"){
            return "purple"
        }
    }


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