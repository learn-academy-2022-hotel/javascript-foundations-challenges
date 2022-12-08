// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}
// Write the code that accesses the first name of the person object.

console.log(person.firstName);

// Write the code that accesses the last name of the person object.

console.log(person.lastName);

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

person.homePlanet = 'Earth'
console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

person.fromPlanetEarth = function() {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}
console.log(person.fromPlanetEarth())

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

const describeProduct = (value1, value2) => {
    return `The product is a ${value1}. It costs $${value2}`
}
console.log(describeProduct(product.name, product.price))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

const totalWithTax = () => {
    return (product.price + (product.price * .07)).toFixed(2)
}
console.log(totalWithTax(product.price))

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.

console.log(lunch.ingredients);

// Write the code that access the third ingredient of the lunch object.

console.log(lunch.ingredients[2]);

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const sandwich = () => {
    return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
}
console.log(sandwich())

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

lunch.sandwichIngredients = function() {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}`
}
console.log(lunch.sandwichIngredients())
// Consider this variable:
const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const onlyCats = animals.filter((kitty) => kitty.type === "cat")
// console.log(onlyCats)

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const onlyNames = animals.map((names) => names.name)
// console.log(onlyNames)

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

var older10 = animals.filter((value) => {
        if (value.age > 10) {
            return value.name
        }
    })
const olderCatNames = older10.map((cat) => {
    return cat.name
})
console.log(olderCatNames)

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

const sentence = animals.map((sentences) => {
    return `${sentences.name} is a ${sentences.type} and is ${sentences.age} years old.`
})
// console.log(sentence)

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully:
// // output: "H. G. Wells is a science fiction author"

let {name, genre} = author
// console.log(`${name} is a ${genre} author`)

// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

// // output: "Charmandar is a Fire pokemon"

// let {species, pokemon_type} = pokeOne 
// const describePokemon = () => {
//     return `${species} is a ${pokemon_type} pokemon`
// }

// console.log(describePokemon(pokeOne))

// // output: "Magikarp is a Water pokemon"

let {species, pokemon_type} = pokeTwo 
const describePokemon = () => {
    return `${species} is a ${pokemon_type} pokemon`
}
// console.log(describePokemon(pokeTwo))

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5
}
// Modify the triangleDimensions object to have a method that returns the area of the triangle.

triangleDimensions.area = function () {
    return (this.base * this.height) / 2
}
// console.log(triangleDimensions.area())

// Write the code that will update the base to be the value of 6.

triangleDimensions.base = 6
// console.log(triangleDimensions.base)

// 🏔 Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
  }
}
// Write the code that logs the name of your cohort.

learn.cohorts[2022] = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"]
console.log(learn.cohorts[2022]);

// Write the code that uses destructuring to log the name of your cohort.

let {2022} = learn.cohorts 
console.log(2022)


// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

// // output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]


