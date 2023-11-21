// class Calculator {
//     add(num1, num2) {
//         let sum = num1 + num2;
//         return sum;
//     }
//     subtract(num1, num2) {
//         let sum = num1 - num2;
//         return sum
//     }
//     multiply(num1, num2) {
//         let sum = num1 * num2;
//         return sum
//     }
//     divide(num1, num2) {
//         let sum = num1 / num2;
//         return sum;
//     }
// }

// class ScientificCalculator extends Calculator {
//     constructor() {
//         super()
//     }
//     square(num) {
//         let sum = num ** 2;
//         return sum;
//     }
//     cube(num) {
//         let sum = num ** 3;
//         return sum;
//     }
//     power(num1, num2) {
//         let sum = Math.pow(num1, num2);
//         return sum;
//     }
// }

function Calculator() {
    this.add = function (num1, num2) {
        let sum = num1 + num2;
        return sum;
    }
    this.subtract = function (num1, num2) {
        let sum = num1 - num2;
        return sum
    }
    this.multiply = function (num1, num2) {
        let sum = num1 * num2;
        return sum
    }
    this.divide = function (num1, num2) {
        let sum = num1 / num2;
        return sum;
    }
}


let calcInstance = new ScientificCalculator();

console.log(calcInstance.add(4, 5));