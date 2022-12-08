
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


// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object

// let blackCoffee = new Coffee("black","no","no")
// console.log(blackCoffee)

// Write the code that outputs the black coffee's profile


// console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars

// const iced = new Coffee ("iced","1","2")
// console.log(iced)

// Write the code that outputs the 1 cream and 2 sugars coffee profile


// console.log(iced.coffeeProfile())


// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// class Latte {
//     constructor(flavor,milkType,numberOfShots){
//         this.flavor = flavor.toLowerCase,
//         this.milkType = milkType,
//         this.numberOfShots =numberOfShots,
//     }
// }

// Write a method for your Latte class that outputs the latte's profile

// class Latte {
//     constructor(flavor,milkType,numberOfShots){
//         this.flavor = flavor,
//         this.milkType = milkType,
//         this.numberOfShots =numberOfShots
//     }

//     latteProfile(){
//         return ` A ${this.flavor} latte with ${this.milkType} and ${this.numberOfShots} shots`
//     }
// }
// let newOrder = new Latte ("vanilla","soy milk","2")
// console.log(newOrder.latteProfile())
// Write the code that makes a regular, single shot latte

// let newOrder2 = new Latte ("regular","whole milk","1")
// console.log(newOrder2)
// Log the regular, single shot latte's profile

// console.log(newOrder2.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.

// let newOrder3 = new Latte ("hazelnut","almond milk","2")
// console.log(newOrder3)

// Log the double shot, hazelnut latte with almond milk's profile.

// console.log(newOrder3.latteProfile())

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
    constructor(radius,height){
        this.radius = radius,
        this.height = height
    }
    cylinderVolume(){
        return (this.radius * this.radius)* this.height * 3.14159
    }
}
let newCylinder = new Cylinder(10,20)
console.log(newCylinder.cylinderVolume())

// Write the code that rounds the volume of the cylinder to four decimal places

let newCylinder2 = newCylinder.cylinderVolume()
console.log(newCylinder2.toFixed(4))

// Write the code that creates three unique cylinder objects

const cyl1 = new Cylinder (10,9); 
const cyl2 = new Cylinder (15,10)
const cyl3 = new Cylinder (12,11)