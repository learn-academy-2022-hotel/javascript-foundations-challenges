// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

const multiplyBy10 = arr1.map((value) => {
    return value * 10
})
console.log(multiplyBy10)

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

const onlyOdds = (array) => {
    let odd = array.filter(value => {
        return value % 2 !== 0
    })
    return odd
}
console.log(onlyOdds(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

const onlyLetters = (array) => {
    let oneType = array.filter(value => {
        return typeof value === "string"
    })
    console.log(oneType)
}
console.log(onlyLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]