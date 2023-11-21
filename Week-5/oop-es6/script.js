class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        console.log(`Driving ${this.make} ${this.model}`);
    }
}
class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}
class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}
class Shape {
    calculateArea() {
        console.log('caculate area')
    }
}
class Rectangle extends Shape {
    calculateArea(height, width) {
        return height * width;
    }
}
class Triangle extends Shape {
    calculateArea(base, height) {
        return (base * height) / 2;
    }
}
class Circle extends Shape {
    calculateArea(radius) {
        return (22 / 7) * Math.pow(radius, 2);
    }
}
class BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountHolderName = accountHolderName;
    }
}
class CheckingAccount extends BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;
    constructor(accountNumber, balance, accountHolderName) {
        super();
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (this.#balance < amount) throw new Error("not enough balance in account");
        this.#balance -= amount;
    }
    getBalance() {
        return `Current balance is ${this.#balance}`;
    }
}
class SavingsAccount extends BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (this.#balance < amount) throw new Error("not enough balance in account");
        this.#balance -= amount;
    }
    getBalance() {
        return `Current balance is ${this.#balance}`;
    }
}
const rect1 = new Rectangle();
const tri1 = new Triangle();
const cir1 = new Circle();
const bankAccount1 = new CheckingAccount(98979, 1000, "John Smith");
const bankAccount2 = new SavingsAccount(98990, 2000, "Sam Alt");

bankAccount1.deposit(1000);
bankAccount1.withdraw(3000);
bankAccount1.getBalance();
console.log(bankAccount1);

bankAccount1.deposit(500);
bankAccount1.withdraw(1000);
bankAccount1.getBalance();
console.log(bankAccount2);

console.log(rect1.calculateArea(4, 7));
console.log(tri1.calculateArea(4, 10));
console.log(cir1.calculateArea(4));