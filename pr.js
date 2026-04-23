"use strict";
// TASK 1
console.log("TASK 1");
class Equation {
}
class LinearEquation extends Equation {
    _a;
    _b;
    constructor(a, b) {
        super();
        this._a = a;
        this._b = b;
    }
    calculateRoots() {
        if (this._a === 0) {
            return [];
        }
        const root = -this._b / this._a;
        return [root];
    }
}
class QuadraticEquation extends Equation {
    _a;
    _b;
    _c;
    constructor(a, b, c) {
        super();
        this._a = a;
        this._b = b;
        this._c = c;
    }
    calculateRoots() {
        if (this._a === 0) {
            console.log(`ERROR! a cannot equals ${this._a}!\n`);
            return [];
        }
        const DISCRIMINANT = Math.pow(this._b, 2) - 4 * this._a * this._c;
        if (DISCRIMINANT > 0) {
            const X1 = Math.floor((-this._b + Math.sqrt(DISCRIMINANT)) / (2 * this._a));
            const X2 = Math.floor((-this._b - Math.sqrt(DISCRIMINANT)) / (2 * this._a));
            return [X1, X2];
        }
        else if (DISCRIMINANT === 0) {
            const X = Math.floor(-this._b / (2 * this._a));
            return [X];
        }
        else {
            return [];
        }
    }
}
let equation1 = new LinearEquation(2, -4);
let equation2 = new QuadraticEquation(1, 7, 5);
let result1 = equation1.calculateRoots();
let result2 = equation2.calculateRoots();
console.log(`Roots for equation 1: ${result1}\nRoots for equation 2: ${result2}\n`);
// TASK 2
console.log("TASK 2");
class Shape {
}
class Square extends Shape {
    _x;
    _y;
    _side;
    constructor(x, y, side) {
        super();
        this._x = x;
        this._y = y;
        this._side = side;
    }
    show() {
        console.log(`Square:\n- Coordinates: ${this._x}, ${this._y}\n- Side: ${this._side}\n`);
    }
    save() {
        return `(${this._x},${this._y}),${this._side}`;
    }
    load(data) {
        const parts = data.split(',');
        this._x = Number(parts[0]);
        this._y = Number(parts[1]);
        this._side = Number(parts[2]);
        console.log('Square data has been loaded!\n');
    }
}
class Rectangle extends Shape {
    _x;
    _y;
    _width;
    _height;
    constructor(x, y, width, height) {
        super();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }
    show() {
        console.log(`Rectangle:\n- Coordinates: ${this._x}, ${this._y}\n- Width: ${this._width}\n- Height: ${this._height}\n`);
    }
    save() {
        return `(${this._x},${this._y}),${this._width},${this._height}`;
    }
    load(data) {
        const parts = data.split(',');
        this._x = Number(parts[0]);
        this._y = Number(parts[1]);
        this._width = Number(parts[2]);
        this._height = Number(parts[3]);
        console.log('Rectangle data has been loaded!\n');
    }
}
class Circle extends Shape {
    _x;
    _y;
    _radius;
    constructor(x, y, radius) {
        super();
        this._x = x;
        this._y = y;
        this._radius = radius;
    }
    show() {
        console.log(`Circle:\n- Coordinates: ${this._x}, ${this._y}\n- Radius: ${this._radius}\n`);
    }
    save() {
        return `(${this._x},${this._y}),${this._radius}`;
    }
    load(data) {
        const parts = data.split(',');
        this._x = Number(parts[0]);
        this._y = Number(parts[1]);
        this._radius = Number(parts[2]);
        console.log('Circle data has been loaded!\n');
    }
}
class Ellipse extends Shape {
    _x;
    _y;
    _width;
    _height;
    constructor(x, y, width, height) {
        super();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }
    show() {
        console.log(`Ellipse:\n- Coordinates: ${this._x}, ${this._y}\n- Dimension: ${this._width} x ${this._height}\n`);
    }
    save() {
        return `(${this._x},${this._y}),${this._width},${this._height}`;
    }
    load(data) {
        const parts = data.split(',');
        this._x = Number(parts[0]);
        this._y = Number(parts[1]);
        this._width = Number(parts[2]);
        this._height = Number(parts[3]);
        console.log('Ellipse data has been loaded!\n');
    }
}
const shapes = [
    new Square(10, 10, 50),
    new Rectangle(0, 0, 100, 70),
    new Circle(20, 30, 40),
    new Ellipse(20, 20, 80, 60)
];
shapes.forEach((shape, index) => {
    console.log(`Shape #${index + 1}: `);
    shape.show();
});
let data = shapes[1].save();
shapes[1].load("1, 2, 3, 4");
shapes[1].show();
// TASK 3
console.log("TASK 3");
class Vehicle {
    averageSpeed;
    costPerKm;
    maxPayload;
    constructor(averageSpeed, costPerKm, maxPayload) {
        this.averageSpeed = averageSpeed;
        this.costPerKm = costPerKm;
        this.maxPayload = maxPayload;
    }
}
class Automobile extends Vehicle {
    _fuelConsumption;
    _fuelPrice;
    constructor(averageSpeed, costPerKm, maxPayload, fuelConsumption, fuelPrice) {
        super(averageSpeed, costPerKm, maxPayload);
        this._fuelConsumption = fuelConsumption;
        this._fuelPrice = fuelPrice;
    }
    calculateTime(distance) {
        let result = distance / this.averageSpeed;
        return result;
    }
    calculateCost(distance, weight) {
        if (weight > this.maxPayload) {
            console.log("Automobile is overloaded! Transportation is impossible!");
            return Infinity;
        }
        let result = (distance / 100) * this._fuelConsumption * this._fuelPrice;
        return result;
    }
}
class Bicycle extends Vehicle {
    _riderStamina;
    constructor(averageSpeed, costPerKm, maxPayload, riderStamina) {
        super(averageSpeed, costPerKm, maxPayload);
        this._riderStamina = riderStamina;
    }
    calculateTime(distance) {
        let pureTime = distance / this.averageSpeed;
        let restStops = Math.floor(distance * this._riderStamina);
        let restTime = restStops * 0.5;
        let result = pureTime + restTime;
        return result;
    }
    calculateCost(distance, weight) {
        if (weight > this.maxPayload) {
            console.log("Too heavy for a bicycle!");
            return Infinity;
        }
        let baseCost = distance * this.costPerKm;
        let weightFactor = weight * 0.5;
        let result = baseCost + weightFactor;
        return result;
    }
}
class Cart extends Vehicle {
    _horseNumber;
    _fodderCostPerDay;
    constructor(averageSpeed, costPerKm, maxPayload, horseNumber, fodderCostPerDay) {
        super(averageSpeed, costPerKm, maxPayload);
        this._horseNumber = horseNumber;
        this._fodderCostPerDay = fodderCostPerDay;
    }
    calculateTime(distance) {
        let travelTime = distance / this.averageSpeed;
        let daysInTrip = Math.floor(travelTime / 14);
        let result = travelTime + (daysInTrip * 10);
        return result;
    }
    calculateCost(distance, weight) {
        if (weight > this.maxPayload * this._horseNumber) {
            console.log("The horses will not budge!");
            return Infinity;
        }
        let totalHours = this.calculateTime(distance);
        let totalDays = Math.ceil(totalHours / 24);
        let fodderTotal = totalDays * this._horseNumber * this._fodderCostPerDay;
        let maintenance = distance * this.costPerKm;
        let result = fodderTotal + maintenance;
        return result;
    }
}
