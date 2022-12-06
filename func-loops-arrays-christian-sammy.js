// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]

const multiArr = (array1) => {
    let arr = []

    for(let i = 0; i < array1.length; i++) {
        
        arr.push(array1[i] * 3)
    }
    return arr
}

console.log(multiArr(testArr1)) // output: [ 9, 27, 45, 12, 30 ]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const oddArr = (array) => {
    let arr = []

    for (let i = 0; i < array.length; i++) {

        if (Math.abs(array[i] % 2) === 1){
            arr.push(array[i])
        }
    }
    return arr
}

console.log(oddArr(testArr2)) // output: [-7, 3, 5, 13]

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
const arrString = (array) => {
    let arr = []

    for (let i = 0; i < array.length; i++) {

        if(typeof array[i] === 'string') {
            arr.push(array[i])
        }
    }
    return arr.join('')
}

console.log(arrString(comboArr)) // output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]

const addThese2 = []

const addArray = (array) => {
    let sum = 0

    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(addArray(addThese1)) // output: 10
console.log(addArray(addThese2)) // output: 0


// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
const maxNumber = (value) => {
    let max = 0
    let arr = []
    for (let i = 0; i < value.length; i++){
         let temp = value[i]
        arr.push(temp)
        if (max < temp){
            max = temp
        }
    }
    return (arr.indexOf(max))
}
console.log(maxNumber(indexHighestNumber)) // output: 1

testing github