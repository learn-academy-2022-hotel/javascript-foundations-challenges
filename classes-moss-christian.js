// Coffee marker: copy the given Coffee class into a text editor
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

// Write the code that makes a black coffee object

let blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee)

// Write the code that outputs the black coffee's profile

console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars

let coffee2 = new Coffee("brown", 1, 2)
console.log(coffee2);

// Write the code that outputs the 1 cream and 2 sugars coffee profile

console.log(coffee2.coffeeProfile());





// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots

// class Latte {
//     constructor(flavor, milkType, shots) {
//         this.flavor = flavor,
//         this.milkType = milkType,
//         this.shots = shots
//     }
// }
// console.log(Latte)

// Write a method for your Latte class that outputs the latte's profile

class Latte {
    constructor(flavor, milkType, shots) {
        this.flavor = flavor,
        this.milkType = milkType,
        this.shots = shots
    }

    latteProfile() {
        return `A ${this.flavor} latte with ${this.milkType} milk and ${this.shotsNumber()}`
      }

      shotsNumber() {
        if (this.shots > 1) {
          return `${this.shots} shots`
        } else {
          return `${this.shots} shot`
        }
      }
}

// Write the code that makes a regular, single shot latte

let singleShot = new Latte("regular", "2%", 1)
console.log(singleShot)

// Log the regular, single shot latte's profile

console.log(singleShot.latteProfile());

// Write the code that makes a double shot, hazelnut latte with almond milk.

let hazelNut2Shot = new Latte("hazelnut", "almond", 2)
console.log(hazelNut2Shot)

// Log the double shot, hazelnut latte with almond milk's profile.

console.log(hazelNut2Shot.latteProfile())



// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)

class Volume {
    constructor(radius, height) {
        this.pi = 3.14,
        this.radius = radius,
        this.height = height
    }

    cylinderProfile() {
        return `The volume of the cylinder is ${this.cylinderVolume()}`
    }

    cylinderVolume() {
        return (this.pi * (this.radius * 2) * this.height).toFixed(4)
    }
}
console.log(Volume)

// Write the code that rounds the volume of the cylinder to four decimal places

let volumeOfCylinder = new Volume(2.5, 8.1)
// console.log(volumeOfCylinder.toFixed(4))

console.log(volumeOfCylinder.cylinderProfile())

// Write the code that creates three unique cylinder objects

let cylinderOne = new Volume(25, 7)
let cylinderTwo = new Volume(42, 39.75)
let cylinderThree = new Volume(11.1, 53)

console.log(cylinderOne)
console.log(cylinderTwo)
console.log(cylinderThree)