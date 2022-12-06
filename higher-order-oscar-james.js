// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// pseudocode 
// declare a function that takes the array arr1 as the argument and returns the expected output. 
// declare a function times10 that take the given array and we will map it.
// return the value given multiplied by a factor a ten. 




const arr1 = [3, 9, 15, 4, 10]


const times10 = (array) => {

    return array.map((value) => value * 10)
    }  
console.log(times10(arr1))

// // output: [30, 90, 150, 40, 100]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// Pseudocoding: Declare a function onlyOdd.
// input: takes in arr2 as the input and use filter method to filter by odd numbers. 
// output: returns only odd values within the array.
const arr2 = [2, 7, 3, 5, 8, 10, 13]

const onlyOdd = (array) => {
    return array.filter((value) => value % 2 !== 0)
}
console.log(onlyOdd(arr2))

// // output: [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// pseudocode: Declare a function onlyStrings that takes in an array. 
// use the filter built in method to filter by datatype and return only strings
// use the join method to turn the array of strings into a single string.
// log the single string

const onlyStrings = (array) => {
    return array.filter((value) => typeof value === "string").join("")
}
console.log(onlyStrings(comboArr))

// // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// Psuedocode: 
// Declare a function called noFalse that takes an array as an arguement
// Input an array of various datatypes
// Filter the inputted array to exclude any false, null, 0, or blank values.
// Console log the reamaining values in a new array

const filterArrayValues = [58, "", "abcd", true, null, false, 0]

const noFalsy = (array) => {
    return array.filter(Boolean)
}

console.log(noFalsy(filterArrayValues));


// // output: [58, "abcd", true]


// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.

// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]