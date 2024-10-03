"use strict";
console.log("hello world");
let age = 10;
if (age > 10) {
    age = age + 15;
}
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let sales1 = 123456789;
let course1 = "TypeScript";
let is_published1 = true;
let level;
level = 1;
level = "a";
function render(doc) {
    console.log(doc);
}
let number = [2, 13, 4, 5];
number.forEach((n) => n.toFixed(2));
let str = 'hello';
let strArr = ['a', 'b', 'c'];
strArr.forEach((n) => n.toUpperCase());
let person = ['a', 10];
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 1] = "Small";
    Size2[Size2["Medium"] = 2] = "Medium";
    Size2[Size2["Large"] = 3] = "Large";
})(Size2 || (Size2 = {}));
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
var Size1;
(function (Size1) {
    Size1["Small"] = "s";
    Size1["Medium"] = "m";
    Size1["Large"] = "l";
})(Size1 || (Size1 = {}));
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTax2(income, taxYear) {
    if (taxYear || 2022 < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
let employee = {
    id: 1,
    name: 'a',
    fax: 123,
    retire: (date) => {
        console.log(date);
    }
};
let employee1 = {
    id: 1,
    name: 'a',
    fax: 123,
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else if (typeof weight === 'string') {
        return parseInt(weight) * 2.2;
    }
    return -1;
}
kgToLbs(10);
kgToLbs('10kg');
let a;
let testBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let quantity2 = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola!');
    }
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
let birthday = customer === null || customer === void 0 ? void 0 : customer.birthday;
let log = (message) => console.log(message);
log === null || log === void 0 ? void 0 : log('Hello');
let input = document.getElementById('username');
let input1 = document.getElementById('input');
input1.value = '10';
let input2 = document.getElementById('input');
input2.value = '10';
let notSure = 4;
notSure = "maybe a string instead";
notSure = true;
function render1(document) {
    document.move();
    document.fly();
    document.whateverWewant();
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something failed');
}
//# sourceMappingURL=index.js.map