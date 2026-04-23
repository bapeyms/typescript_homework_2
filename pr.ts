// TASK 1
console.log("TASK 1");
abstract class Equation {
    abstract calculateRoots(): number[];
}

class LinearEquation extends Equation {
    private _a: number;
    private _b: number;
    constructor(a: number, b: number) {
        super();
        this._a = a;
        this._b = b;
    }

    public calculateRoots(): number[] {
        if (this._a === 0) {
            return [];
        }
        const root = -this._b / this._a;
        return [root];
    }
}

class QuadraticEquation extends Equation {
    private _a: number;
    private _b: number;
    private _c: number;
    constructor(a: number, b: number, c: number) {
        super();
        this._a = a;
        this._b = b;
        this._c = c;
    }

    public calculateRoots(): number[] {
        if (this._a === 0) {
            console.log(`ERROR! a cannot equals ${this._a}!\n`);
            return [];
        }

        const DISCRIMINANT: number = Math.pow(this._b, 2) - 4 * this._a * this._c;
        if (DISCRIMINANT > 0) {
            const X1: number = Math.floor((-this._b + Math.sqrt(DISCRIMINANT)) / (2* this._a));
            const X2: number = Math.floor((-this._b - Math.sqrt(DISCRIMINANT)) / (2* this._a));
            return [X1, X2];
        }
        else if (DISCRIMINANT === 0) {
            const X: number = Math.floor(-this._b / (2 * this._a));
            return [X];
        }
        else {
            return [];
        }
    }
}

let equation1 = new LinearEquation(2, -4);
let equation2 = new QuadraticEquation(1, 7, 5);

let result1: number[] = equation1.calculateRoots();
let result2: number[] = equation2.calculateRoots();
console.log(`Roots for equation 1: ${result1}\nRoots for equation 2: ${result2}\n`);

// TASK 2
console.log("TASK 2");
abstract class Shape {
    abstract show(): void;
    abstract save() : string;
    abstract load(data: string): void;
}

class Square extends Shape {
    private _x: number;
    private _y: number;
    private _side: number;
    constructor(x: number, y: number, side: number) {
        super();
        this._x = x;
        this._y = y;
        this._side = side;
    }

    show(): void {
        console.log(`Square:\n- Coordinates: ${this._x}, ${this._y}\n- Side: ${this._side}\n`);
    }
    save() : string {
        return `(${this._x},${this._y}),${this._side}`;
    }
    load(data: string): void {
        const parts = data.split(',');
        this._x = Number(parts[0]);
        this._y = Number(parts[1]);
        this._side = Number(parts[2]);
        console.log('Square data has been loaded!\n');
    }
}

class Rectangle extends Shape {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    constructor(x: number, y: number, width: number, height: number) {
        super();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    show(): void {
        console.log(`Rectangle:\n- Coordinates: ${this._x}, ${this._y}\n- Width: ${this._width}\n- Height: ${this._height}\n`);
    }
    save() : string {
        return `(${this._x},${this._y}),${this._width},${this._height}`;
    }
    load(data: string): void {
        const parts = data.split(',');
        this._x = Number(parts[0]);
        this._y = Number(parts[1]);
        this._width = Number(parts[2]);
        this._height = Number(parts[3]);
        console.log('Rectangle data has been loaded!\n');
    }
}

class Circle extends Shape {
    private _x: number;
    private _y: number;
    private _radius: number;
    constructor(x: number, y: number, radius: number) {
        super();
        this._x = x;
        this._y = y;
        this._radius = radius;
    }

    show(): void {
        console.log(`Circle:\n- Coordinates: ${this._x}, ${this._y}\n- Radius: ${this._radius}\n`);
    }
    save() : string {
        return `(${this._x},${this._y}),${this._radius}`;
    }
    load(data: string): void {
        const parts = data.split(',');
        this._x = Number(parts[0]);
        this._y = Number(parts[1]);
        this._radius = Number(parts[2]);
        console.log('Circle data has been loaded!\n');
    }
}

class Ellipse extends Shape {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    constructor(x: number, y: number, width: number, height: number) {
        super();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    show(): void {
        console.log(`Ellipse:\n- Coordinates: ${this._x}, ${this._y}\n- Dimension: ${this._width} x ${this._height}\n`);
    }
    save() : string {
        return `(${this._x},${this._y}),${this._width},${this._height}`;
    }
    load(data: string): void {
        const parts = data.split(',');
        this._x = Number(parts[0]);
        this._y = Number(parts[1]);
        this._width = Number(parts[2]);
        this._height = Number(parts[3]);
        console.log('Ellipse data has been loaded!\n');
    }
}

const shapes: Shape[] = [
    new Square(10, 10, 50),
    new Rectangle(0, 0 , 100, 70),
    new Circle(20, 30, 40),
    new Ellipse(20, 20, 80, 60)
]
shapes.forEach((shape, index) => {
    console.log(`Shape #${index + 1}: `);
    shape.show();
})

let data: string = shapes[1].save();
shapes[1].load("1, 2, 3, 4");
shapes[1].show();

// TASK 3
console.log("TASK 3");
abstract class Vehicle {
    protected averageSpeed: number;
    protected costPerKm: number;
    protected maxPayload: number;
    constructor(averageSpeed: number, costPerKm: number, maxPayload: number) {
        this.averageSpeed = averageSpeed;
        this.costPerKm = costPerKm;
        this.maxPayload = maxPayload;
    }

    abstract calculateTime(distance: number): number;
    abstract calculateCost(distance: number, weight: number): number;
}

class Automobile extends Vehicle {
    private _fuelConsumption: number;
    private _fuelPrice: number;
    constructor(averageSpeed: number, costPerKm: number, maxPayload: number,
        fuelConsumption: number, fuelPrice: number) {
            super(averageSpeed, costPerKm, maxPayload);
            this._fuelConsumption = fuelConsumption;
            this._fuelPrice = fuelPrice;
        }
    
    calculateTime(distance: number): number {
        let result: number = distance / this.averageSpeed;
        return result;
    }
    calculateCost(distance: number, weight: number): number {
        if (weight > this.maxPayload) {
            console.log("Automobile is overloaded! Transportation is impossible!");
            return Infinity;
        }
        let result = (distance / 100) * this._fuelConsumption * this._fuelPrice;
        return result;
    }
}

class Bicycle extends Vehicle {
    private _riderStamina: number;
    constructor(averageSpeed: number, costPerKm: number, maxPayload: number,
        riderStamina: number) {
            super(averageSpeed, costPerKm, maxPayload);
            this._riderStamina = riderStamina;
        }
    
    calculateTime(distance: number): number {
        let pureTime: number = distance / this.averageSpeed;
        let restStops: number = Math.floor(distance * this._riderStamina);
        let restTime: number = restStops * 0.5;

        let result: number = pureTime + restTime;
        return result;
    }
    calculateCost(distance: number, weight: number): number {
        if (weight > this.maxPayload) {
            console.log("Too heavy for a bicycle!");
            return Infinity;
        }

        let baseCost: number = distance * this.costPerKm;
        let weightFactor: number = weight * 0.5;

        let result: number = baseCost + weightFactor;
        return result;
    }
}

class Cart extends Vehicle {
    private _horseNumber: number;
    private _fodderCostPerDay: number;
    constructor(averageSpeed: number, costPerKm: number, maxPayload: number,
        horseNumber: number, fodderCostPerDay: number) {
            super(averageSpeed, costPerKm, maxPayload);
            this._horseNumber = horseNumber;
            this._fodderCostPerDay = fodderCostPerDay;
        }
    
    calculateTime(distance: number): number {
        let travelTime: number = distance / this.averageSpeed;
        let daysInTrip: number = Math.floor(travelTime / 14);

        let result: number = travelTime + (daysInTrip * 10);
        return result;
    }
    calculateCost(distance: number, weight: number): number {
        if (weight > this.maxPayload * this._horseNumber) {
            console.log("The horses will not budge!");
            return Infinity;
        }

        let totalHours: number = this.calculateTime(distance);
        let totalDays: number = Math.ceil(totalHours / 24);
        let fodderTotal: number = totalDays * this._horseNumber *this._fodderCostPerDay;
        let maintenance: number = distance * this.costPerKm;

        let result: number = fodderTotal + maintenance;
        return result;
    }
}