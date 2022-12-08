// class Coffee {
//     constructor(type, cream, sugar) {
//         this.type = type.toLowerCase()
//         this.cream = cream
//         this.sugar = sugar
//     }
    
//     coffeeProfile() {
//         return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
    
//     creams() {
//         if (this.cream > 1) {
//             return `${this.cream} creams`
//         } else {
//             return `${this.cream} cream`
//         }
//     }
    
//     sugars() {
//         if (this.sugar > 1) {
//             return `${this.sugar} sugars`
//         } else {
//             return `${this.sugar} sugar`
//         }
//     }
// }
// Write the code that makes a black coffee object
// const black = new Coffee ("Black", 0, 0)

// Write the code that outputs the black coffee's profile
// console.log(black)
//output: Coffee { type: 'black', cream: 0, sugar: 0 }

// Write the code that makes a coffee object with 1 cream and 2 sugars
// const lightBrown = new Coffee ("Black", 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(lightBrown)
//output: Coffee { type: 'black', cream: 1, sugar: 2 }

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// class Latte {
//     constructor(flavor, milkType, numberShots) {
//         this.flavor = flavor.toLowerCase()
//         this.type = milkType
//         this.shots = numberShots
//     }
//     latteProfile() {
//         return `A ${this.flavor} flavored coffee with ${this.type} milk, and ${this.shots} shot`
//     }
// }

// const newCoffee = new Latte ("Toffee", "regular", 1)
// console.log(newCoffee)
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// console.log(newCoffee.latteProfile())
//output: "A toffee flavored coffee with regular milk, and 1 shot"

// Write the code that makes a double shot, hazelnut latte with almond milk.
// const anotherLatte = new Latte ("hazelnut", "almond", 2)
// Log the double shot, hazelnut latte with almond milk's profile.
// console.log(anotherLatte)
//output: Latte { flavor: 'hazelnut', type: 'almond', shots: 2 }
// console.log(anotherLatte.latteProfile())

// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
    constructor(cylRadius, cylHeight) {
        this.radius = cylRadius
        this.height = cylHeight
    }
    cylinderMath() {
        return this.radius*this.radius*this.height*Math.PI
    }

}
// const radiusSquared = (this.radius*this.radius)
// return radiusSquared
// return `this product costs: (${(this.price*1.07).toFixed(2)})`
// return `(${(3.14)*this.radius*this.radius} * ${(this.height)})`

const newCylinder = new Cylinder(2, 2)
// console.log(newCylinder)
//output: Cylinder { radius: 2, height: 2 }
// console.log(newCylinder.cylinderMath().toFixed(4))

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// console.log(newCylinder.cylinderMath())
// output: 25.132741228718345

// Write the code that rounds the volume of the cylinder to four decimal places
// console.log(newCylinder.cylinderMath().toFixed(4))
//output: 25.1327

// Write the code that creates three unique cylinder objects
const cylinder1 = new Cylinder(6, 2)
console.log(cylinder1.cylinderMath().toFixed(4))
//output: 226.1947
const cylinder2 = new Cylinder(4, 8)
console.log(cylinder2.cylinderMath().toFixed(4))
//output: 402.1239
const cylinder3 = new Cylinder(43, 21)
console.log(cylinder3.cylinderMath().toFixed(4))
//output: 121984.9011