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
  //index signature property
  [seatNumber: string]: string;
}

let seats: SeatAssignment = {};
seats.a1 = "available";
seats.a2 = "available";
seats.a3 = "available";
console.log(seats["a1"]);


//static method
class Ride{
  private static _activeRides:number = 0;
  start(){Ride._activeRides++}
  stop(){Ride._activeRides--}


 static get activeRides ():number{
    return Ride._activeRides
  }
}

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

//inheritance
 class Person{
  constructor(public firstName: string, public lastName: string){}
  get fullName():string{
    return this.firstName + " " + this.lastName
  }
  walk():void{
    console.log("walk");
    
  }
 }

 class Student extends Person{
  constructor(public id:number, firstName: string, lastName: string){
    super(firstName, lastName)
  }

  greet():void{
    console.log("Hello greeting of day"); 
  }

 }

 const st1=new Student(1,'a','b')
 st1.greet()
 console.log(st1.fullName);

 class Teacher extends Person{
  override get fullName():string{
    return "Proff. "+super.fullName
  }
 }

 const t1=new Teacher('a','b')
 console.log(t1.fullName);
 // noImplicitOverride true, it will throw an error if a method is not marked as overrided


 let printNames:Person[]=[
  new Student(1,'a1','b'),
  new Teacher('a2','b')
 ]

 function logNames(persons:Person[]){
  persons.forEach(p=>console.log(p.fullName))
 }
 logNames(printNames)

 //Abstract class, instance of abstract class cannot be created

 abstract class Shape{
  constructor(public color:string){}
  abstract render():void
 }

 class Circle extends Shape{
  constructor(public radius:number, color:string){
    super(color)
  }
  override render(): void {
    console.log("render circle");
    
  }
 }

 let c1=new Circle(10,'red')
 c1.render()

 //interface , it is used to define the structure of an object

// use interface when no logic is required, it is used to define the structure of an object while in abstract class we can have logic

interface Calender{
  name:string;
  addEvent(date:Date):void
  removeEvent(date:Date):void
  getEvents():Date[]
}

interface CloudCalender extends Calender{
  saveEvent(date:Date):void
}

class GoogleCalender implements Calender{
  constructor(public name: string) {
  }
  addEvent(date: Date): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(date: Date): void {
    throw new Error("Method not implemented.");
  }
  getEvents(): Date[] {
    throw new Error("Method not implemented.");
  }
  
}

//what is difference between type and interface
// type is used to define the structure of an object
// interface is used to define the structure of an object
// type and interface are both used to define the structure of an object
/*
Interface:

Can only be used to define object types (not primitive types like string or number)
Can be extended using the extends keyword
Can be implemented by a class
Can define methods and properties
Type:

Can be used to define any type, including primitive types, object types, and union types
Cannot be extended or implemented
Can define type aliases, union types, and intersection types
In general, if you need to define a blueprint for an object that can be implemented by a class, use an interface. If you need to define a type alias or a more complex type, use a type.

Here's an example:

typescript
CopyInsert
// Interface
interface Person {
  name: string;
  age: number;
}

// Type
type StringOrNumber = string | number;
Note that in TypeScript 4.2 and later, the differences between type and interface are less pronounced, and type can be used to define object types that are similar to interfaces. However, the distinctions above still hold in general.







**/