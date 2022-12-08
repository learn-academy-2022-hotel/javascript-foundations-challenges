// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// class Coffee {
//   constructor(typeString, creamString, sugarString) {
//     this.type = typeString.toLowerCase()
//     this.cream = creamString
//     this.sugar = sugarString
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// let blackCoffee = new Coffee("Black", "1 cream", "2 sugars")
// console.log(blackCoffee.coffeeProfile())
// Latte Maker: create a class for Latte
// class Latte {
//     constructor(flavorString, milkTypeString, shotsNumber) {
//       this.flavor = flavorString.toLowerCase()
//       this.milkType = milkTypeString
//       this.shots = shotsNumber
//     }
//       latteProfile() {
//     return `A ${this.flavor} latte with ${this.milkType} and ${this.shots} shots`
// }
// }
// let raymondsLatte = new Latte("Vanilla", "Oatmilk", 2)
// console.log(raymondsLatte.latteProfile())
// // Write a Latte class that takes a flavor, a milk type, and a number of shots
// // Write a method for your Latte class that outputs the latte's profile
// // Write the code that makes a regular, single shot latte
// let leasLatte = new Latte("Vanilla", "Regular", 1)
// console.log(leasLatte.latteProfile())
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// let hazelnutLatte = new Latte("Hazelnut", "Almond", 2)
// console.log(hazelnutLatte.latteProfile()) 
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
    constructor(radiusNumber, heightNumber) {
        this.radius = radiusNumber,
        this.height = heightNumber
    
    }
    volumeCylinder() {
        return (Math.PI * this.radius**2 * this.height).toFixed(4)
    }
}
let varOne = new Cylinder(3, 6)
let varTwo = new Cylinder(52, 31)
let varThree = new Cylinder(38, 24)
// console.log(roundedAnswer1())
// console.log(roundedAnswer2())
// console.log(roundedAnswer3())
console.log(varOne.volumeCylinder())
console.log(varTwo.volumeCylinder())
console.log(varThree.volumeCylinder())
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
