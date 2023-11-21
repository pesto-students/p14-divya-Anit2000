const person = {};
Object.defineProperties(person, {
    name: {
        value: "John",
        writable: false,
    },
    email: {
        value: "John@gmail.com",
        writable: true
    },
    age: {
        value: 24,
        writable: true
    }
});

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `${this.model} ${this.make} ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }
    getDetails() {
        return `${this.model} ${this.make} ${this.year} ${this.numDoors}`;
    }
}

const vehicleIns = new Vehicle("Honda", "SUV", 1989);
const carIns = new Car("Skoda", "Cedan", "2000", 4);
console.log(vehicleIns.getDetails());
console.log(carIns.getDetails())