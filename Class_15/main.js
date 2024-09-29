/* Class 15:
Object Oriented Programming
Pillars:
1. Inheritance: Sharing of info
2. Encapsulation: grouping of info
3. Abstraction: hiding of info
4. Polymorphism: redefining of info
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
// Example 1
var House = /** @class */ (function () {
    function House(HouseNum, OwnerName) {
        this.HouseNumber = HouseNum;
        this.HouseOwner = OwnerName;
    }
    return House;
}());
var h1 = new House("A123", "Sanika");
// new Promise()
// new Date()
console.log(h1.HouseOwner);
var h2 = new House("B123", "Ali");
console.log(h2);
// h2.HouseNumber = "459B"; 
console.log(h2.HouseNumber);
// Inheritance 
var Animal = /** @class */ (function () {
    function Animal(AnimalName) {
        this.Name = AnimalName;
    }
    Animal.prototype.Walk = function () {
        console.log("Walking");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function () {
        console.log(this.Name, "woof woof!");
    };
    return Dog;
}(Animal));
var d1 = new Dog("Tommy");
d1.woof();
d1.Walk();
var Cat = /** @class */ (function () {
    function Cat(Name) {
        this.Name = Name;
    }
    Cat.prototype.meow = function () {
        console.log("meow meow!");
    };
    return Cat;
}());
var c1 = new Cat("Fluff Ball");
c1.meow();
console.log(c1.Name);
