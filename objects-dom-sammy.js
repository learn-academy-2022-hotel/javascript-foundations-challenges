const person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    objOne: function (){
        return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`
    }
  }
//   Write the code that accesses the first name of the person object.

console.log(person.firstName)

//   Write the code that accesses the last name of the person object.

console.log(person.lastName)

//   Write the code that gives the person object a property of 
// homePlanet and set it to 'Earth'.

console.log(person.homePlanet)

//   Update the person object with a method that logs "Arthur Dent is from planet Earth".

console.log(person.objOne())


const product = {
    name: "chair",
    price: 24.99,
    describeProduct: function (){
      return `The product is a ${this.name}. It costs $${this.price}.`
    },
    totalWithTax: function (){
        return (this.price * 1.07).toFixed(2)
    }
  }

//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

console.log(product.describeProduct())

//   Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

console.log(product.totalWithTax())


const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    list: function (){
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
    }
  }

//   Write the code that accesses the ingredients property.

console.log(lunch.ingredients)

//   Write the code that access the third ingredient of the lunch object.

console.log(lunch.ingredients[2])

//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const listOf = () => {
    return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`

}
console.log(listOf(lunch))

//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

console.log(lunch.list())

const animals = [
    { name: "Waffles", type: "dog", age: 7 }, // animal1
    { name: "Fluffy", type: "cat", age: 14 }, // animal2
    { name: "Spelunky", type: "dog", age: 4 }, // animal3
    { name: "Hank", type: "cat", age: 11 } // animal4
  ]

//   Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const cats = animals.filter((value) => value.type === 'cat')
console.log(cats)

//   Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// TODO: Code below doesn't work

const animalName = (array) => {
    return animals.filter(value => {
        return animals.array
    })

}

console.log(animalName(animals))

//   Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
//   Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.