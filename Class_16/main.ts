/* Class 16:
 Object Oriented Programming:
 1. Inheritance
 2. Abstraction
 3. Encapsulation 
 4. Polymorphism 
*/

/* Object Oriented Programming:
 Object of Student:
 Properties: Name, Class, RollNumber
 Methods: Payfees(), Dropout()
*/
 
// Class
class Animal {
    // Properties
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method
    makeSound() {
        return this.name + " General Sound";
    }
}

// Object
let A1 = new Animal("Tommy");
console.log(A1.name);
console.log(A1.makeSound());

// Inheritance: Attributes inherited by parent to child
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound() {
        return "Woof!"; // Polymorphism: Overriding the inherited method
    }
}

let D1 = new Dog("Tommy1");
console.log(D1.makeSound());

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound() {
        return "Meow!"; // Polymorphism: Overriding the inherited method
    }
}

let C1 = new Cat("Fluff Ball");
console.log(C1.makeSound());

// Encapsulation: Private: Parent, Protected: Parent & Child, Public
class Parent {
    public name: string;
    protected cardPinCode: number = 1234;

    constructor(name: string) {
        this.name = name;
    }
}

class Child extends Parent {
    withdraw(pin: number) {
        if (this.cardPinCode === pin) {
            return "Amount Deducted!";
        } else {
            return "Invalid Pincode";
        }
    }
}

let Ch1 = new Child("Ali");
console.log(Ch1.withdraw(9999)); // Result: Invalid Pincode

// Polymorphism (many forms) & Abstraction
interface IShape {
    calculateArea(): number;
}

class Circle implements IShape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square implements IShape {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    calculateArea(): number {
        return this.side * this.side;
    }
}

// Polymorphism and Abstraction
class Rectangle implements IShape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Homework:
// Abstract Classes and Methods:
// Abstract class Animal
abstract class AbstractAnimal {
    // Abstract method without implementation
    abstract makeSound(): void;
  
    // Concrete method with implementation
    move(): void {
      console.log('Moving...');
    }
}
  
// Subclass Dog extends AbstractAnimal
class AbstractDog extends AbstractAnimal {
    // Implementing the abstract method
    makeSound(): void {
        console.log('Woof! Woof!');
    }
}
  
// Subclass Cat extends AbstractAnimal
class AbstractCat extends AbstractAnimal {
    // Implementing the abstract method
    makeSound(): void {
        console.log('Meow! Meow!');
    }
}
  
// Creating instances of the subclasses
const abstractDog = new AbstractDog();
const abstractCat = new AbstractCat();
  
// Calling methods on the instances
abstractDog.makeSound(); // Output: Woof! Woof!
abstractDog.move();      // Output: Moving...
  
abstractCat.makeSound(); // Output: Meow! Meow!
abstractCat.move();      // Output: Moving...
  
// Static Methods:
class MathOperations {
    // Static method to add two numbers
    static add(a: number, b: number): number {
        return a + b;
    }
  
    // Static method to subtract two numbers
    static subtract(a: number, b: number): number {
        return a - b;
    }
}
  
// Using the static methods without creating an instance of the class
const sum = MathOperations.add(5, 3);
const difference = MathOperations.subtract(10, 4);
  
console.log(`Sum: ${sum}`);           // Output: Sum: 8
console.log(`Difference: ${difference}`); // Output: Difference: 6
