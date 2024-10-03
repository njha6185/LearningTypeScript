class Account {
  readonly id:number;
  owner:string;
  protected _balance:number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  //another way of constructor parameter
//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

    getbalance():number{
    return this._balance
  }

  //getter and setter
  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid balance");
    }
    this._balance = value;
  }
}

let account = new Account(1, "a", 1000);
account.deposit(1000);
// console.log(account.balance);
console.log(account.getbalance());

//getter and setter
account.balance = 2000;
console.log(account.balance);

console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
// account.id=10;


class SeatAssignment {
  [seatNumber: string]: string;
}

let seats: SeatAssignment = {};
seats.a1 = "available";
seats.a2 = "available";
seats.a3 = "available";
console.log(seats["a1"]);


//static method
class C {
  static hello() {
    console.log("Hello");
  }
}