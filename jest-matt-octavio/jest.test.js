// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.
// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("getCoffee", () => {
    it("tells us to drink coffee if we're tired or keep working if we're not", () => {
        expect(getCoffee("tired")).toEqual("drink coffee")
        expect(getCoffee("not tired")).toEqual("keep working")
    })
})

// Create the function that will make the test pass.
const getCoffee = (str) => {
    if (str.toUpperCase() === "TIRED") {
        return "drink coffee"
    } else {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("chill", () => {
    it("tell us whether to relax if we're stressed and keep going if we're not", () => {
        expect(chill("stressed")).toEqual("relax")
        expect(chill("not stressed")).toEqual("keep going")
    }) 
})
// Create the function that will make the test pass.
const chill = (string) => {
    if (string.toUpperCase() === "STRESSED") {
        return "relax"
    } else {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budget", () => {
    it("tells us whether the price is lower than $300", () => {
        expect(budget(200)).toEqual("in budget")
    })
})
// Create the function that will make the test pass.
const budget = (number) => {
    if (number < 300) {
        return "in budget"
    }
}

// Write the test for a function that takes in two numbers and returns the smaller number.
describe("isSmaller", () => {
    it("takes two numbers and returns the smaller one", () => {
        expect(isSmaller(0, 1)).toEqual(0)
        expect(isSmaller(1, 1)).toEqual("equal")
    })
})
// Create the function that will make the test pass.
const isSmaller = (num1, num2) => {
    // Using one ternary
    // condition ? returns this : returns the other
    // if (num1 === num2) return "equal"
    // return num1 > num2 ? num2 : num1

    // Using double ternary
    return num1 === num2 ? "equal" : num1 < num2 ? num1 : num2

    // Using conditionals
    // if (num1 < num2) {
    //     return num1
    // } else if (num1 === num2) {
    //     return "equal"
    // } else {
    //     return num2
    // }
}

// Write the test for a function that takes in one number and returns whether the number is odd.
describe("isOdd", () => {
    it("tells us if the given number is odd", () => {
        expect(isOdd(3)).toEqual("odd")
        expect(isOdd(2)).toEqual("even")
    })
})
// Create the function that will make the test pass.
const isOdd = num => {
    return num % 2 === 1 ? "odd" : "even"
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColor", () => {
    it("tells us the color correspoding to the input fruit", () => {
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
    })
})
// Create the function that will make the test pass.
const fruitColor = fruit => {
    return fruit === "banana" 
    ? "yellow" : 
    fruit === "apple" 
    ? "red" : "purple"
}
// Write the test for a function called rick that returns "Morty".
describe("rick", () => {
    it("returns the string Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})
// Create the function that will make the test pass.

const rick = () => {
    return "Morty"
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe("greeter", () => {
    it("returns a greeting with input name to the screen", () => {
        expect(greeter("Matt")).toEqual("Hello Matt")
    })
})
// Create the function that will make the test pass.
const greeter = name => {
    return `Hello ${name}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
    it("tells us whether the input number is odd or even", () => {
        expect(oddOrEven(1)).toEqual("odd")
        expect(oddOrEven(2)).toEqual("even")
    })
})
// Create the function that will make the test pass.
const oddOrEven = num => {
    return num % 2 === 0 ? "even" : "odd"
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe("doubler", () => {
    it("returns the input number doubled", () => {
        expect(doubler(2)).toEqual(4)
    })
})
// Create the function that will make the test pass.
const doubler = num => {
    return num * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () => {
    it("takes two numbers and multiplys them together", () => {
        expect(multiply(2, 3)).toEqual(6)
    })
})
// Create the function that will make the test pass.
const multiply = (num1, num2) => {
    return num1 * num2
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () => {
    it("tells us whether the first number is evenly divisible by the second number", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
        expect(divisibleBy(10, 4)).toEqual("10 is not evenly divisible by 4")
    })
})
// Create the function that will make the test pass.
const divisibleBy = (num1, num2) => {
    return num1 % num2 === 0 ? `${num1} is evenly divisible by ${num2}` : `${num1} is not evenly divisible by ${num2}`
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
describe ("fizzbuzz", () => {
    it('If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".', () => {
        expect(fizzbuzz(3)).toEqual("fizz")
        expect(fizzbuzz(5)).toEqual("buzz")
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
        expect(fizzbuzz(11)).toEqual("none of the above")
    })
})
// Create the function that will make the test pass.
const fizzbuzz = num => {
    return num % 3 === 0 && num % 5 === 0 ? "fizzbuzz" : num % 3 === 0 ? "fizz" : num % 5 === 0 ? "buzz" : "none of the above"
}
