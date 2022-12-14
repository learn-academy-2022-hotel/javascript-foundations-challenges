// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// Pseudocode: Define function arrayMultiply that takes input of testArry1 and multiplies values by factor of 3.  


const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

const arrayMultiply = (array) => {
    let arrayTwo = []
    for(let i = 0; i < array.length; i++){
        arrayTwo.push(array[i] * 3)
    }
    return arrayTwo 
}
console.log(arrayMultiply(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// pseudocode: define a function named onlyOdd. take input testArr2 and return output [-7, 3, 5, 13]
// initialize a new empty array as a placeholder
// use a for loop to iterate the values of the input array.
// push values to the empty array use a modulo to find the odd numbers in the array. 
// return new array.
// log new array to the console.  

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]
const onlyOdd = (array) => {
    let arrayTwo = []
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 !== 0){
            arrayTwo.push(array[i])
        }

    }
    return arrayTwo
}
console.log(onlyOdd(testArr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [7, "n",
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
// Pseudocode: define a function letterOnly and take input comboArr to output only the letters the array. 
// define a new empty array
// iterate through the array to find only string values.
// write a conditional statement to filter and push only the string values to the new empty array
// log the new function to return the expected output. 

const letterOnly = (array) => {
    let arrayTwo = [] 
    for(let i = 0; i < array.length; i++){
      if(typeof array[i] === "string"){
        arrayTwo.push(array[i])
      }
    }
    return arrayTwo.join("")
}
console.log(letterOnly(comboArr))

// output: "nicework"


// Create a function that takes in an array of numbers and returns the sum.
// Pseudocode
// declare a function called addArray
// input: array of numbers
// initialize a sum variable that starts 0
// iterate through the elements in the array
// add each element to each other at each iteration
// push the sum of each iteration to the next array item
// log the result on the console

const addThese1 = [1, 2, 3, 4]
// // output: 10

const addThese2 = []
// // output: 0

const addArray = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}

console.log(addArray(addThese1));
console.log(addArray(addThese2));


// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1


// ???? Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300
// ???? Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// // STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.