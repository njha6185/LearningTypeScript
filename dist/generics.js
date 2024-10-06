"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class GenKeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const obj1 = new GenKeyValuePair('a', 1);
const obj2 = new GenKeyValuePair('a', 'b');
function swap(arr) {
    return arr.reverse();
}
console.log(swap([1, 2, 3]));
console.log(swap(['a', 'b', 'c']));
const obj3 = { key: 'a', value: 1 };
class GenKeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const obj4 = new GenKeyValue('a', 1);
function getProperty(obj, key) {
    return obj[key];
}
let product = {
    name: 'a',
    price: 1
};
//# sourceMappingURL=generics.js.map