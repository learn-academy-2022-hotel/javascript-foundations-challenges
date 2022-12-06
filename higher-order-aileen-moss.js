// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// Pseudocode: 
// create a function named multiplyBy10
// parameter is an array of numbers named arr1
// use map to transform and display each value multiplied by 10
const arr1 = [3, 9, 15, 4, 10]
// expected output: [30, 90, 150, 40, 100]
const multiplyBy10 = arr1.map ((value) => {
    return value * 10
})
console.log(multiplyBy10)
// actual output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// Pseudocode:
// create a function named onlyOdds
// parameter is an array of numbers named arr2
// use filter to iterate
// return the odd numbers from arr2
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]
const onlyOdds = (array) => {
    return array.filter((value) => value % 2 !== 0)
  }
console.log(onlyOdds(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// Pseudocode:
// create a function named onlyLetters
// parameter is an array of mixed values
// inside the function we'll create a new variable oneType-- placeholder of the filter method by data type "string"
// filter over oneType to get all strings
// return final variable
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"
const onlyLetters = (array) => {
    let oneType = array.filter(value => {
        return typeof value === "string"
    })
    return oneType.join("")
}
console.log(onlyLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]