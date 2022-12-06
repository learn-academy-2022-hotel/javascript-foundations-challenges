// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// write test

describe ("coffeeFunction" , () => {
    it("tells you to drink coffee if you are tired", () => {
        expect(coffeeFunction("yes")).toEqual("drink coffee")
        expect(coffeeFunction("no")).toEqual("keep working")

    })
})

// // declare a function named CoffeeFunction 
// input: string
// output: string
// if "yes" then return "drink coffeee"
// if "no" then return "keep working"
// use conditional statements to produce expected return

const coffeeFunction = (string) => {
if (string === "yes") {
    return "drink coffee"
} else if (string === "no"){
    return "keep working"
}
}

// Create the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// declare function named notStressed 
// input: "string"
// output: "string"
// if yes then return "relax"
// if no then return "keep going"

describe ("notStressed" , () => {
    it("tells you to relax if you are stressed and keep going if not" , () => {
        expect(notStressed("yes")).toEqual("relax")
        expect(notStressed("no")).toEqual("keep going")

    })

})

// error code: notStressed is not defined

const notStressed = (string) => {
if (string === "yes"){
    return "relax"
} else if (string === "no"){
    return "keep going"
}
}
// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.
// declare a function named budget 
// input: number
// output: string
// if under 300 return "in budget"

describe ("budget", () => {
    it("logs in budget if price is lower than $300",() => {
        expect(budget(299)).toEqual("in budget")
    })
})

const budget = (num) => {
    if(num < 300){
        return "in budget"
    }
    
}
// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.
// create a function called twoNum 
// input: two numbers
// output: the smaller number
// if given 13 and 6, then return 6

describe ("twoNum", () => {
    it("returns the smaller number", () => {
        expect(twoNum(13,6)).toEqual(6)
    })
})
// error message:   ● twoNum › returns the smaller number
// ReferenceError: twoNum is not defined

const twoNum = (num1,num2) => {
    if(num1 < num2){
        return num1
     }
     else if(num2 < num1){
        return num2
     }

}
// Create the function that will make the test pass.
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