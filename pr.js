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
