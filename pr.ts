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
}