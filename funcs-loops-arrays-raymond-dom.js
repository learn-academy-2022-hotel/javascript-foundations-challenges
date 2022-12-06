//Psuedo code
// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// const testArr1 = [3, 9, 15, 4, 10]
// for (let i = 0; i < testArr1.length; i++) {
//     console.log(testArr1[i] *3)
// } 
// // output: [9, 27, 45, 12, 30]
//Psuedo code
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const oddArr = (array) => {
//     let newArr = []
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0){
//         newArr.push(array[i])
//     }
// }
//  return newArr
//   }
//     console.log(oddArr(testArr2))
// // output: [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
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
// const letters = /^[A-Za-z]+$/;
// if(comboArr.values.match(letters)){
//     return 
// }
// // number
//x = 'string'; 
// // output: "nicework"

//Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4];
// let sum = (addThese1.reduce(myFunction(a, b)) {
//     return a + b
// } ,0); 
// console.log(sum)
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
//test

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
const multiplier = arr1.map((value) => value * 10)
console.log(multiplier)
// // output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
const onlyOdd = (array) => {
    return array.filter((value)=> value % 2 !==0)
}
console.log(onlyOdd(arr2))
// output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const onlyLetters = (array) =>{
    let letters = array.filter(value => {
        return typeof value === "string"
    })
}
console.log(onlyLetters(comboArr))


// // output: "nicework"
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]