//decorator are attributes that can be added to a class or function to modify its behavior

function  Component(constructor:Function){
    console.log("Component decorator called");
    constructor.prototype.isComponent = true;
}


@Component
class Person1{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    walk(){
        console.log("walk");
        // console.log(this.isComponent);
        
    }
}

const p = new Person1("a");
console.log(p);



class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
   
    @enumerable(false)
    greet() {
      return "Hello, " + this.greeting;
    }
  }

  function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
    };
  }
