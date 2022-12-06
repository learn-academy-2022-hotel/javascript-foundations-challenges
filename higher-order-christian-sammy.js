// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
const multipyByTen = (array) => {
    return array.map((value) => value * 10)
}
console.log(multipyByTen(arr1))  // output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
const odd = (array) => {
    return array.filter(value => value % 2 !== 0)
}
console.log(odd(arr2)) // output: [7, 3, 5, 13]

//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const onlyString = (array) => {
   let filterArray = array.filter (value => { return typeof value === "string")
    return 
}
console.log()
// output: "nicework"