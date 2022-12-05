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
// create function called filteredArray1 that uses stringFilter and .join to return a string with only the letters
// input: comboArr
// output: "nicework"


function stringFilter(onlyString) {
    return typeof onlyString === 'string'
}
function niceWorkArray () {
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

const highestNum = (highest) => {
    
}