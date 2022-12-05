// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// pseudo code:
// declare a function named mult3
// input/parameter - an array of strings
// expected output - new array with the number multiplied by 3

const testArr1 = [3, 9, 15, 4, 10]
const mult3 = (array) => {
    let newArr = []
    for (let i=0; i < array.length; i++) {
        newArr.push(array[i] *3)
    }
    return newArr
}
console.log(mult3(testArr1))
// output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// pseudo code:
// declare a function named oddNums
// input/parameter - an array of strings
// expected output - will create a new array that will return only odd numbers to include both positive and negative integers

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const oddNums = (array) => {
    let = oddArr = []
    for (i=0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            oddArr.push(array[i])
        } 
    } return oddArr
}   
console.log(oddNums(testArr2))
// // output: [-7, 3, 5, 13]

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

console.log(typeof comboArr)
//output: object

const onlyLetters = (string) => {
    
}


// // output: "nicework"