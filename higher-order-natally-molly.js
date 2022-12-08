//Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

//creating a function
//inpout: array of numbers
//output: new array with all numbers multiplied by 10

//process
//create a function called multiplier
//parameter -array of numbers
//use map to iterate

const multiplier = (array) => {
    return array.map((value) => value *10)
}
console.log(multiplier(arr1))


//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]

//create function named oddNumbers
//input: array of numbers
//output: new array with odd numbers
//parameter: array of numbers
// use filter to iterate

const oddNumbers = (array) => {
    return array.filter((value) => value % 2 === 1)
}
    console.log(oddNumbers(arr2))
    
//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

//create a function named onlyLetters
//input:array of different date types
//output: string with only letters
//parameter: array of different date types
// use filter to iterate

const onlyLetters = (array) => {
    let oneType= array.filter(value => {
         return typeof value === `string`     
      
    })
 }
     console.log(onlyLetters(comboArr))

//Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]
