// Consider this variable:

//  const person = {
//    firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   getData: function () {
//     return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//   }
// }
// // Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// // Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// console.log(person.homePlanet)
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.getData()) 
// // Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }
// // Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const describeProduct = () => {
// return `This product is a ${product.name}. It costs $${product.price}.`
// }
// console.log(describeProduct())
// // Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// const chairWithTax = () => {
//     return (product.price * 1.07).toFixed(2)
// }
// console.log(chairWithTax())
// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
//   sandwichMaker: function () {
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}.`
//   }
// }
// // Write the code that accesses the ingredients property.
// console.log(lunch.ingredients);
// // Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// // Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const sandwichPrep = () => {
//     return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients}.`
// }
// console.log(sandwichPrep())
// console.log(lunch.sandwichMaker())

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// // Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// const catFinder = (animalArray) => {
//     return animalArray.filter((value) => value.type === "cat")
// }
//  console.log(catFinder(animals))
// Refactor - this worked 
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// const namesOnly = (petNames) => {
//     return petNames.map((value) => value.name)
// }
// // function getName() {
// //     return 
// //}
// // console.log(namesOnly(animals))
// // Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// const olderAnimals = (animalAges) => {
//     return animalAges.filter((value) => value.age > 10)
// }
// console.log(olderAnimals(animals));
// // Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// const animalDescription = (animalSentence) => {
//     return animalSentence.map((value) => `${value.name} is a ${value.type} who is ${value.age} years old.`)
// }
// console.log(animalDescription(animals))
// // Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// // Write the code that destructures the author object so that the following code snippet will run successfully:
// const { name, genre } = author
// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// // Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// const describePokemon = (pokemon) => {
// const { species, pokemon_type} = pokemon
//     return `${species} is a ${pokemon_type} pokemon`
// }

// console.log(describePokemon(pokeOne))
// // // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"

// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5,
//   triangleArea: function () {
//     return .5 * this.base * this.height
//   }
// }
// console.log(triangleDimensions.triangleArea())
// // Modify the triangleDimensions object to have a method that returns the area of the triangle.
// // Write the code that will update the base to be the value of 6.
// triangleDimensions.base = 6
// console.log(triangleDimensions.triangleArea())
// ???? Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"]
  }
}
// Write the code that logs the name of your cohort.
console.log(learn.cohorts[2022][7])
// Write the code that uses destructuring to log the name of your cohort.
const {cohorts} = learn 
console.log(cohorts[2022][7])
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
