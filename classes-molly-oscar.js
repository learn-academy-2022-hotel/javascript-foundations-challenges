// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase(),
//     this.cream = cream,
//     this.sugar = sugar
//   }
//     // let blackCoffee = new Coffee("black", "" ,"")
//     // console.log(blackCoffee)

//     coffeeProfile(){
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//       }
//     //   let blackCoffee = new Coffee("black", "" ,"")
// //     blackCoffee.coffeeProfile ()
// //      console.log(blackCoffee.coffeeProfile())
// //  A black coffee with 0 cream, 0 sugar 

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
// let blackCoffee = new Coffee("black", 0 , 0)
// blackCoffee.coffeeProfile ()
// console.log(blackCoffee.coffeeProfile())

// let anotherCoffee = new Coffee( "black", 1, 2)
// console.log(anotherCoffee)
// //Coffee { type: 'black', cream: 1, sugar: 2 }


// console.log(anotherCoffee.coffeeProfile())
// // A black coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte

// class Latte {
//     constructor(){
//     }
// }

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// class Latte {
//     constructor(){
//         this.flavor = "flavorString"
//         this.milkType = "milkTypeString"
//         this.shots = shotsNumber
//     }
// }
// Write a method for your Latte class that outputs the latte's profile
class Latte {
        constructor(flavorString, milkTypeString,shotsNumber){
            this.flavor = flavorString,
            this.milkType = milkTypeString,
            this.shots = shotsNumber
        } 
        latteProfile(){
            return `A ${this.flavor} latte with ${this.milkType} milk ,and ${this.shots} shots.`
    }
}
 let mollysDrink = new Latte ("vanilla", "oat", 3)

 console.log (mollysDrink.latteProfile())
 //A Vanilla latte with oat milk ,and 3 shots.

// Write the code that makes a regular, single shot latte
let newDrink = new Latte ("regular", "whole", 1)
console.log(newDrink)
// Latte { flavor: 'regular', milkType: 'whole', shots: 1 }
// Log the regular, single shot latte's profile
console.log(newDrink.latteProfile())
// A regular latte with whole milk ,and 1 shots.

// Write the code that makes a double shot, hazelnut latte with almond milk.
let newDrink2 = new Latte ("hazelnut", "almond",2)
console.log(newDrink2)
//Latte { flavor: 'hazelnut', milkType: 'almond', shots: 2 }
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(newDrink2.latteProfile())
//A hazelnut latte with almond milk ,and 2 shots.

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects.
class Cylinder {
    constructor (numberRadius, numberHeight){
        this.radius = numberRadius,
        this.height = numberHeight
    }
    volume(){
        return (Math.PI * this.radius * 2 * this.height).toFixed(4)
    }
}

let cyDim = new Cylinder (2,4)
console.log(cyDim.volume())
//output: 50.2655

let cylinder1 = new Cylinder (4,5)
let cylinder2 = new Cylinder (6,3)
let cylinder3 = new Cylinder (7,9)

console.log(cylinder1)
//output: Cylinder { radius: 4, height: 5 }

console.log(cylinder2)
//output:Cylinder { radius: 6, height: 3 }

console.log(cylinder3)
//output: Cylinder { radius: 7, height: 9 }
