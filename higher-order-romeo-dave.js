// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// declare a function named multiplier that multiplies the value of each index in the arr1 array by 10.
const arr1 = [3, 9, 15, 4, 10]
const multiplier = arr1.map((value) => value * 10)
console.log(multiplier)
// // output: [30, 90, 150, 40, 100]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// declare a function named numbersArray that returns only the odd values.

// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// const onlyOdd = (array) => {
//     return array.filter((value) => value % 2 !==0)
// }
// console.log(onlyOdd(arr2))

// output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// declare a function called filteredarray that takes an array of numbers, strings, and boolean, returns only strings.

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//
// const filteredArray = (array) => {
//   let stringOnly = array.filter(value => {
//     return typeof value === "string"
//   })
//   return stringOnly.join("")
// }
// console.log(filteredArray(comboArr))

// // output: "nicework"
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

const filterArrayValues = [58, "", "abcd", true, null, false, 0]

const newArray = (array) => {
  let typeOne = array.filter(value => {
    return typeof value === "string" && value.includes("abcd")
  })
  return typeOne
}

console.log(newArray(filterArrayValues))

// output: [58, "abcd", true]
// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
