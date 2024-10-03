console.log("hello world");

let age: number = 10;
if (age > 10) {
    age=age+15
}

let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true; 

//Below are the same as above, the way they are written is different
// when a variable is assigned value during declaration then the type of the variable is inferred, inferred means that the compiler will infer the type of the variable
let sales1 = 123_456_789;
let course1 = "TypeScript";
let is_published1 = true; 

// level is of type any, when a variable is not assigned a value during declaration, the type of the variable is not set
//avoid any type as much as possible
let level;
level=1;
level="a";


function render(doc:any){
    console.log(doc);
}

//Arrays
let number:number[] = [2,13,4,5]
number.forEach((n)=>n.toFixed(2))

let str:string = 'hello';
let strArr:string[] = ['a','b','c'];
strArr.forEach((n)=>n.toUpperCase())

//tuples
// tuple is a fix length array with fixed types 
let person:[string,number] = ['a',10];

//enum
enum Size2 {Small=1, Medium, Large}
enum Size {Small = 1, Medium = 2, Large = 3}
let mySize: Size = Size.Medium
console.log(mySize);

//with type
enum Size1 {Small = 's', Medium = 'm', Large = 'l'}

const enum Size3 {Small = 's', Medium = 'm', Large = 'l'}

//function
// function return type is inferred from the return value if not specified
function calculateTax(income:number, taxYear=2022):number{
    if (taxYear < 2022){
        return income * 1.2;
    }
    return income * 1.3;
}

//noUnUsedParameters is set to true by default and it will throw an error if a parameter is not used
//noImplicitReturns is set to true by default and it will throw an error if a function does not return a value for all scenario
//noUnusedLocals is set to true by default and it will throw an error if a local variable is not used

//optional parameter fxn
function calculateTax2(income:number, taxYear?:number):number{
    if(taxYear||2022<2022){
        return income * 1.2;
    }
    return income * 1.3;
}

//objects
let employee:{
    readonly id:number,
    name:string,
    fax?:number,
    retire: (date: Date) => void //void is type of return value
} = {
    id:1,
    name:'a',
    fax:123,
    retire: (date: Date) => {
        console.log(date);
    }
}

// type alias
type Employee ={
    readonly id:number,
    name:string,
    fax?:number,
    retire: (date: Date) => void
}

let employee1:Employee = {
    id:1,
    name:'a',
    fax:123,
    retire: (date: Date) => {
        console.log(date);
    }
}

// multiple types and narrowing 
function kgToLbs(weight: number | string):number{
    //Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    }
    else if(typeof weight === 'string'){
        return parseInt(weight) * 2.2;
    }
    return -1;
} 

kgToLbs(10);
kgToLbs('10kg');
 
//type intersection
let a: number & string;

type Draggable = {
    drag:()=>void
}

type Resizable = {
    resize:()=>void
}

type UIWidget = Draggable & Resizable

let testBox: UIWidget={
    drag:()=>{},
    resize:()=>{}
}

//literal (exact, specific value)

let quantity : 50|100=100;

type Quantity = 50|100;

let quantity2 : Quantity = 100;

type Metric = "cm"|"inch";

// nullable types
function greet(name:string|null){
    if(name){
        console.log(name.toUpperCase());
    }
    else{
        console.log('Hola!');
    }
}
//strictNullChecks is set to true by default, it will throw an error if a null value is passed

//optionalChaining, optional property access operator (a?.b)
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()}
}
let customer = getCustomer(1);
let birthday = customer?.birthday;
 
//optional element access operator (a?.[x])
let log = (message:string) => console.log(message);
log?.('Hello');

//nullish coalescing operator (a ?? b), it will return b if a is null or undefined and a if a is not null or undefined,
//if a value is 0 then it will return 0

//HTML elements
let input :HTMLElement|null=document.getElementById('username');

//type assertion
let input1 = document.getElementById('input') as HTMLInputElement;

input1.value='10'

let input2= <HTMLInputElement>document.getElementById('input');
input2.value='10'

//any type
let notSure: any = 4;
notSure="maybe a string instead";
notSure=true;

//unknown type
//unknown is used over any when we don't know the type of the variable since compiler forces to use narrowing in some cases
function render1(document:any){
    document.move();
    document.fly();
    document.whateverWewant();
}

//instanceof is used to check if an object is an instance of a class

//never type, it tells compiler that the function will never return a value
function error(message:string):never{
    throw new Error(message);
}

//allowUnReachableCode is set to true by default, it will throw an error if a code is unreachable
function fail() {
    return error('Something failed');
}





