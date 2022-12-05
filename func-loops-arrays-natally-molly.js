// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]
//function
//input: an array of numbers
//output: a new array of the original numbers multiplied by 3 

const tripler = (array) => {
    let newArray = []
    for (let i =0; i <array.length; i++){
        newArray.push(array[i]*3)
    }
    return newArray
}
console.log(tripler(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]
//Function
//input: an array of numbers
//output: an array of odd numbers of the original array

const oddNumbers = (array) => {
    let newArray =[]
    for ( let i=0; i <array.length; i++){
        if (array [i] % 2 === 0){
            newArray.push(array[i])
        } 
    } return newArray
}
console.log(oddNumbers(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
//function
//input: an array with multiple data types
//output: returns a string with only letters
// // output: "nicework"

const onlyLetters = (array) => {
    let string =[]
    for (let i=0; i<array.length; i++){
        if (typeof array[i] === `string`){ 
            string.push(array[i])}
    } 
    return string
}
console.log(onlyLetters(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1