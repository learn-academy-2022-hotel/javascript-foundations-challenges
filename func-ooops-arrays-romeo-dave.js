// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]

// declare function mult3
// input/parameter: array of numbers
// expected output: new array with numbers multiplied by 3

// const mult3 = (array) => {
//   let newArr = []
//   for (let i = 0; i <array.length; i++) {
//     newArr.push(array[i] * 3)
//   }
//   return newArr
// }
//
// console.log(mult3(testArr1))
// output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// declare function oddNumbers
// input/parameter: array of oddNumbers
// expected output: new array showing only odd odd numbers

// const oddNumbers = (array) => {
//   let newArr  = []
//   for (let i = 0; i <array.length; i++) {
//     if (array[i] % 2 === 1) {
//     newArr.push(array[i])
//     }
//   }
//   return newArr
// }
// console.log(oddNumbers(testArr2))

// output: [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// declare a function named letters
// input/parameter: an array of numbers and letters
// if the data type is a string, return the string
// if the data type is anything else, return nothing
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]

// const letters = (array) => {
//   let newArray = [] 
//   for (let i=0 ; i<array.length ; i++){
//     if (typeof array === "string"){
//       return newArray}
//  } 
// }
// console.log(letters.concatcomboArr)

// output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
// 
const addThese1 = [1, 2, 3, 4]
function sumArray (array) {
  let sum = 0
  for (let i=0 ; i<array.length ; i++) {
    sum += array[i]
  }
  console.log(sumArray(addThese1))
  return sum
}
// output: 10

const addThese2 = []
// output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1
