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
}
let account = new Account(1, "a", 1000);
account.deposit(1000);
console.log(account.getbalance());
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=oops.js.map