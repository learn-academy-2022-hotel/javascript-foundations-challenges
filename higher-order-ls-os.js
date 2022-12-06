// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

const multiplyBy10 = arr1.map((value) => {
    return value * 10
})

// console.log(multiplyBy10)

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

const onlyOdds = arr2.filter(value => {
    return value % 2 !== 0
})

// console.log(onlyOdds)

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

const mixedDataArray = comboArr.filter(value => {
    return typeof value === "string"
})

// console.log(mixedDataArray.join(""))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

const truthies = filterArrayValues.filter(value => {
    return !!value === true
})

// console.log(truthies)


// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
let arr = str.split("")
const vowelRemoved = arr.filter(value => {
    let vowels = ["a", "e", "i", "o", "u"]
    return !vowels.includes(value)
})

// console.log(vowelRemoved.join(""))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const array1 = [3, 7, 10, 5, 4, 3]
const array2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

let arrays = array1.concat(array2)
let newArr = []
arrays.forEach(value => {
    if (!newArr.includes(value)) {
        newArr.push(value)
    }
})

console.log(newArr)