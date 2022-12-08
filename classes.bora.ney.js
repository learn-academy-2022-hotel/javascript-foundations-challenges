// Coffee marker: copy the given Coffee class into a text editor

// Write the code that makes a black coffee object
// let blackCoffee = new Coffee

// Write the code that outputs the black coffee's profile
// let blackCoffee = new Coffee()

// Write the code that makes a coffee object with 1 cream and 2 sugars
// let blackCoffee = new Coffee("", 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// let blackCoffee = new Coffee("", 1, 2)
// console.log(blackCoffee)

class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }

  }
  let blackCoffee = new Coffee("", 1, 2)
  console.log(blackCoffee)

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
    constructor(flavor, milkType, numberOfShots) {
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType.toLowerCase()
      this.numberOfShots = numberOfShots 
    }
}

console.log(Latte)

// let regLatte = new Latte("none", "regular", 1)
// console.log(regLatte)

let hazelNutLatte = new Latte("hazelnut", "almond milk", 2)
console.log(hazelNutLatte)

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
        return `${this.radius} * ${this.height} * 2 * Math.PI`
    }
}

let demoType = new Cylinder(5, 2)
console.log(demoType)