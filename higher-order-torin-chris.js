// // CHRIS AND TORIN spent our time going over GitHub with Charlean. We didn't work on the challenge during class time.

// // Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// // Don't forget to pseudo code.

// // Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // // output: [30, 90, 150, 40, 100]

// const timesTen = arr1.map(value => value * 10)
// console.log(timesTen)

// // added below example for Torin's understanding of the calculation in a different way than above

// const timesThree = arr1.map((value) => {
//     return value * 3
// })
// console.log(timesThree)

// // Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]

// const onlyOdds = arr2.filter(value => value % 2 !== 0)
// console.log(onlyOdds)
// output: [7, 3, 5, 13]
// console.log(arr2)
// output: [2, 7, 3, 5, 8, 10, 13] demonstrating that the original array stays intact

// // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // // output: "nicework"

// const niceWork = comboArr.filter(value => typeof value === 'string')
// console.log(niceWork.join(''))

// // Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // // output: [58, "abcd", true]

const filteredArr = filterArrayValues.filter(value => value !== false && value !== null && value !==0 && value !== "")
console.log(filteredArr)

// // 🏔 Stretch Goals
// // Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // // output: "jvscrpt s wsm"

// const noVowels = (str) => {
//     return str.replace(/[aeiou]/gi, '')
// }
// console.log(noVowels(str))

// // Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // // output: [3, 7, 10, 5, 4, 8, 2, 1]

// let noDupe = []
// let combinedArray = arr1.concat(arr2)
//     combinedArray.forEach((unique) => {
//         if (!noDupe.includes(unique)){
//             noDupe.push(unique)
//         }
//     })
// console.log(noDupe)