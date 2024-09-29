/* Class 16:
 Object Oriented Programming:
 1. Inheritance
 2. Abstraction
 3. Encapsulation
 4. Polymorphism
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Object Oriented Programming:
 Object of Student:
 Properties: Name, Class, RollNumber
 Methods: Payfees(), Dropout()
*/
// Class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // Method
    Animal.prototype.makeSound = function () {
        return this.name + " General Sound";
    };
    return Animal;
}());
// Object
var A1 = new Animal("Tommy");
console.log(A1.name);
console.log(A1.makeSound());
// Inheritance: Attributes inherited by parent to child
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Woof!"; // Polymorphism: Overriding the inherited method
    };
    return Dog;
}(Animal));
var D1 = new Dog("Tommy1");
console.log(D1.makeSound());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow!"; // Polymorphism: Overriding the inherited method
    };
    return Cat;
}(Animal));
var C1 = new Cat("Fluff Ball");
console.log(C1.makeSound());
// Encapsulation: Private: Parent, Protected: Parent & Child, Public
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.cardPinCode = 1234;
        this.name = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.withdraw = function (pin) {
        if (this.cardPinCode === pin) {
            return "Amount Deducted!";
        }
        else {
            return "Invalid Pincode";
        }
    };
    return Child;
}(Parent));
var Ch1 = new Child("Ali");
console.log(Ch1.withdraw(9999)); // Result: Invalid Pincode
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    Square.prototype.calculateArea = function () {
        return this.side * this.side;
    };
    return Square;
}());
// Polymorphism and Abstraction
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// Homework:
// Abstract Classes and Methods:
// Abstract class Animal
var AbstractAnimal = /** @class */ (function () {
    function AbstractAnimal() {
    }
    // Concrete method with implementation
    AbstractAnimal.prototype.move = function () {
        console.log('Moving...');
    };
    return AbstractAnimal;
}());
// Subclass Dog extends AbstractAnimal
var AbstractDog = /** @class */ (function (_super) {
    __extends(AbstractDog, _super);
    function AbstractDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementing the abstract method
    AbstractDog.prototype.makeSound = function () {
        console.log('Woof! Woof!');
    };
    return AbstractDog;
}(AbstractAnimal));
// Subclass Cat extends AbstractAnimal
var AbstractCat = /** @class */ (function (_super) {
    __extends(AbstractCat, _super);
    function AbstractCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementing the abstract method
    AbstractCat.prototype.makeSound = function () {
        console.log('Meow! Meow!');
    };
    return AbstractCat;
}(AbstractAnimal));
// Creating instances of the subclasses
var abstractDog = new AbstractDog();
var abstractCat = new AbstractCat();
// Calling methods on the instances
abstractDog.makeSound(); // Output: Woof! Woof!
abstractDog.move(); // Output: Moving...
abstractCat.makeSound(); // Output: Meow! Meow!
abstractCat.move(); // Output: Moving...
// Static Methods:
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    // Static method to add two numbers
    MathOperations.add = function (a, b) {
        return a + b;
    };
    // Static method to subtract two numbers
    MathOperations.subtract = function (a, b) {
        return a - b;
    };
    return MathOperations;
}());
// Using the static methods without creating an instance of the class
var sum = MathOperations.add(5, 3);
var difference = MathOperations.subtract(10, 4);
console.log("Sum: ".concat(sum)); // Output: Sum: 8
console.log("Difference: ".concat(difference)); // Output: Difference: 6
