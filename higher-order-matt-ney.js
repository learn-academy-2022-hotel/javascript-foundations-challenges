// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.


const arr1 = [3, 9, 15, 4, 10]

const arrayTwo = arr1.map(value => value * 10)

//console.log(arrayTwo)




// output: [30, 90, 150, 40, 100]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.


const arr2 = [2, 7, 3, 5, 8, 10, 13]

const onlyOdd = arr2.filter(value => {
    return value % 2 === 1
})
    // console.log(onlyOdd)

// output: [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.


const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const onlyLetters = comboArr.filter(value => typeof value === "string") 



// console.log(onlyLetters.join(""))

// output: "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.


const filterArrayValues = [58, "", "abcd", true, null, false, 0]

const withoutNull = filterArrayValues.filter(value => {
    if (value === true || value === "number" || value === "string")
    return `${value}`
})


console.log(withoutNull)


// output: [58, "abcd", true]