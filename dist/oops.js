"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    getbalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid balance");
        }
        this._balance = value;
    }
}
let account = new Account(1, "a", 1000);
account.deposit(1000);
console.log(account.getbalance());
account.balance = 2000;
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
class SeatAssignment {
}
let seats = {};
seats.a1 = "available";
seats.a2 = "available";
seats.a3 = "available";
console.log(seats["a1"]);
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride = new Ride();
ride.start();
ride.stop();
ride.start();
ride.start();
ride.start();
console.log(Ride.activeRides);
class C {
    static hello() {
        console.log("Hello");
    }
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walk");
    }
}
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    greet() {
        console.log("Hello greeting of day");
    }
}
const st1 = new Student(1, 'a', 'b');
st1.greet();
console.log(st1.fullName);
class Teacher extends Person {
    get fullName() {
        return "Proff. " + super.fullName;
    }
}
const t1 = new Teacher('a', 'b');
console.log(t1.fullName);
let printNames = [
    new Student(1, 'a1', 'b'),
    new Teacher('a2', 'b')
];
function logNames(persons) {
    persons.forEach(p => console.log(p.fullName));
}
logNames(printNames);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("render circle");
    }
}
let c1 = new Circle(10, 'red');
c1.render();
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent(date) {
        throw new Error("Method not implemented.");
    }
    removeEvent(date) {
        throw new Error("Method not implemented.");
    }
    getEvents() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=oops.js.map