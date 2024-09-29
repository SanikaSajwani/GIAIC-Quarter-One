/* Class 15:
Object Oriented Programming
Pillars:
1. Inheritance: Sharing of info
2. Encapsulation: grouping of info
3. Abstraction: hiding of info
4. Polymorphism: redefining of info
*/

// Example 1
class House {
  readonly HouseNumber: string; 
  HouseOwner: string;
  Residency!: number;

  constructor(HouseNum: string, OwnerName: string) {
    this.HouseNumber = HouseNum;
    this.HouseOwner = OwnerName;
  }
}

let h1 = new House("A123", "Sanika");
// new Promise()
// new Date()
console.log(h1.HouseOwner);


let h2 = new House("B123", "Ali");
console.log(h2);

// h2.HouseNumber = "459B"; 
console.log(h2.HouseNumber);

// Inheritance 
class Animal {
    Name: string; 

    constructor (AnimalName: string){
        this.Name = AnimalName
    }

    Walk() {
        console.log("Walking")
    }
}

class Dog extends Animal {

    woof () {
        console.log(this.Name, "woof woof!")
    }
    constructor(name:string) {
        super(name)
    }
}

let d1 = new Dog("Tommy")
d1.woof();
d1.Walk();

class Cat {
    Name: string;

    constructor (Name: string){
        this.Name = Name
    }

    meow () {
        console.log("meow meow!")
    }
}

let c1 = new Cat("Fluff Ball")
c1.meow();
console.log(c1.Name);


