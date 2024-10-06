//generic  type

class KeyValuePair{
    constructor(public key:string, public value:number){}
}

class GenKeyValuePair<T, U>{
    constructor(public key:T, public value:U){}
}

const obj1= new GenKeyValuePair<string, number>('a', 1);
const obj2= new GenKeyValuePair<string, string>('a', 'b');
// if we don't pass generic type then compiler will infer the type of the variable passed to the constructor

//generic functoion
function swap<T>(arr: T[]): T[]{
    return arr.reverse();
}

console.log(swap([1,2,3]));
console.log(swap(['a', 'b', 'c']));

//generic interface
interface IGenKeyValue<T, U>{
    key:T;
    value:U;
}

const obj3: IGenKeyValue<string, number> = {key: 'a', value: 1};

//generic class
class GenKeyValue<T, U>{
    constructor(public key:T, public value:U){}
}

const obj4= new GenKeyValue<string, number>('a', 1);

//generic constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  //type mapping
  interface Product{
    name: string;
    price: number;
  }

  type ReadonlyProduct = {
    readonly [K in keyof Product]: Product[K];
  }

  let product : ReadonlyProduct={
    name: 'a',
    price: 1
  }


