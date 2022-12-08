// 💻 Challenges


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

// Coffee maker: copy the given Coffee class into a text editor

// Write the code that makes a black coffee object

let blackCoffee = new Coffee("black", "no", "no")
console.log(blackCoffee);
// result: Coffee { type: 'black', cream: 0, sugar: 0 }
// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile());
// result: A black coffee with no cream, no sugar
// Write the code that makes a coffee object with 1 cream and 2 sugars
let sweetCoffee = new Coffee("dark roast", 1, 2)
console.log(sweetCoffee);
// result: Coffee { type: 'dark roast', cream: 1, sugar: 2 }
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(sweetCoffee.coffeeProfile());
// result: A dark roast coffee with 1 cream, 2 sugars


// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots

class Latte {
    constructor(flavor, milkType, numberShots) {
        this.flavor = flavor.toLowerCase(),
        this.milkType = milkType,
        this.numberShots = numberShots
    }

    latteProfile() {
        return `A ${this.flavor} latte with ${this.milkType} milk and ${this.numberShotsFn()} `
    }

    numberShotsFn() {
        if (this.numberShots > 1) {
            return `${this.numberShots} shots`
        } else {
            return `${this.numberShots} shot`
        }
    }
}

// Write a method for your Latte class that outputs the latte's profile

// Write the code that makes a regular, single shot latte
let regularLatte = new Latte ("regular", "no", 1)
console.log(regularLatte);
// result: Latte { flavor: 'regular', milkType: 'no', numberShots: 1 }

// Log the regular, single shot latte's profile
console.log(regularLatte.latteProfile());
// result: A regular latte with no milk and 1 shot 

// Write the code that makes a double shot, hazelnut latte with almond milk.
let hazelnutLatte = new Latte ("hazelnut", "almond", 2)
console.log(hazelnutLatte);
// result: Latte { flavor: 'hazelnut', milkType: 'almond', numberShots: 2 

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazelnutLatte.latteProfile());
// result: A hazelnut latte with almond milk and 2 shots 


// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects