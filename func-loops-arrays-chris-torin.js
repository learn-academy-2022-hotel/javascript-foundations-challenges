// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]

// create a function called numbersTimesThree. function will multiply each number in the array and return new array with the original numbers times 3
// input: given array of numbers
// output: new array with numbers multiplied by 3

const numbersTimesThree = (testArr1) => {
    let newNumbers = []
    for(let i=0; i < testArr1.length; i++){
        newNumbers.push(testArr1[i]*3)
    }
    return newNumbers
}
console.log(numbersTimesThree(testArr1))

// output: [9, 27, 45, 12, 30]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// create function called oddNumber that outputs only odd numbers from the array
// input: testArr2
// output: new array with only odd numbers [-7, 3, 5, 13]

function oddNumberFilter(odds) {
    return odds % 2 !== 0
}
function oddNumber () {
    let filteredOdds = testArr2.filter(oddNumberFilter)
    return filteredOdds
}

console.log(oddNumber())

// output: [-7, 3, 5, 13]


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
// output: "nicework"

// create function called stringFilter that filters out any data type that is not a string
// create function called niceWorkArray that uses stringFilter and .join to return a string with only the letters
// input: comboArr
// output: "nicework"


const stringFilter = (onlyString) => {
    return typeof onlyString === 'string'
}
const niceWorkArray = () => {
    let filteredStrings = comboArr.filter(stringFilter)
    return filteredStrings
}

var niceWork = niceWorkArray()
niceWork = niceWork.join("")
console.log(niceWork)

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10

const sum1 = (numArray) => {
    return numArray.reduce((a, b) => a + b, 0)
}
console.log(sum1(addThese1))

const addThese2 = []
// output: 0

const sum2 = (numArray) => {
    return numArray.reduce((a, b) => a + b, 0)
}
console.log(sum2(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1

// create function called largest that retrieves the highest number in given array
// create variable in function that the highest number will be assigned to
// use forEach to iterate through each index
// use conditional to make variable = highest number
// input: indexHighestNumber
// output: 1

const largest = (indexHighestNumber) => {
    var largest = indexHighestNumber[0]
    indexHighestNumber.forEach((i) => {
      if (i > largest){
        largest = i 
      }
    })
    return indexHighestNumber.indexOf(largest)
}
console.log(largest(indexHighestNumber))


// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// assign empty array to variable noDupe
// assign combined arrays to variable arr3
// create function to push unique characters into noDupe

let noDupe = []
let arr3 = arr1.concat(arr2)
arr3.forEach((unique) => {
    if (!noDupe.includes(unique)){
        noDupe.push(unique)
    }
})
console.log(noDupe);

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// output: [0, 0, 0, 0, 0, 0]

// assign empty array to variable emptyArray
// create function specArray1
// for loop within function to iterate through arrayLength and push arrayValue into each index


// let emptyArray = []
// const specArray1 = (emptyArray) => {
//     let length = arrayLength
//     for (let i=0; i < length; i++){
//         emptyArray.push(arrayValue)
//     } return emptyArray
// }
// console.log(specArray1(emptyArray))

const arrayLength = 4
const arrayValue = 11
// output: [11, 11, 11, 11]

// assign empty array to variable emptyArray2
// create function specArray2
// for loop within function to iterate through arrayLength and push arrayValue into each index

let emptyArray2 = []
const specArray2 = (emptyArray) => {
    let length = arrayLength
    for (let i=0; i < length; i++){
        emptyArray2.push(arrayValue)
    } return emptyArray2
}
console.log(specArray2(emptyArray2))

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// output: 10

// create function that takes addUp1/2/3 and returns sum of it and all whole && positive numbers below it
// input: addUp1/addUp2/addUp3
// output: 10/55/180300

const sumAddUp1 = (value) => {
    return value * (value + 1) / 2
}
console.log(sumAddUp1(addUp1))

const addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55

const sumAddUp2 = (value) => {
    return value * (value + 1) / 2
}
console.log(sumAddUp2(addUp2))

const addUp3 = 600
// output: 180300

const sumAddUp3 = (value) => {
    return value * (value + 1) / 2
}
console.log(sumAddUp3(addUp3))