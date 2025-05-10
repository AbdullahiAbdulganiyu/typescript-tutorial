// satrting typescript, you follow the following process
// 1. npm install -g typescript
// 2. npm init -y
// 3. npm install typescript --save-dev
// 4. npx tsc --init

let x: number = 3;
let y: string = "Three";
let z: boolean = true;
let a: number | string = 3;

const arr: number[] = [1, 2, 3];
const arr2: string[] = ["1", "2", "3"];

// making the data type of arr3 array either be number or string(all items inside array must be of thesame data type)
const arr3: number[] | string[] = ["1", "2"];

enum Size {
  Small,
  Medium,
  Large,
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Right = "RIGHT",
  Left = "LEFT",
}

// setting the data data type of b to unknown so that it can be any data type
let b: unknown = 1;
// accounting for the data type that b can be
if (typeof b === "number") {
  const calc = b + 1;
} else if (typeof b === "string") {
  const calc2 = b + "hello";
}

// casting the data type of b
const result0 = (b as number) + 1;

// setting the data type of d to be of any data type. The difference between any and unknown is that in any the various data type for the variable would not need to be accounted for but for unknown possible data type of the variable need to be accounted for
let d: any = 4;
// assing a value to the d without needing to account for the various data types because it's data type was declared to be any
const result = d + 2;
const result2 = d + "nice";

const objArr = [{ name: "tim" }, { name: "joe" }, { name: "jade" }];
// optional chaining because the result of .pop() can either be a string or undefined
const el = objArr.pop()?.name;

const objArr2 = [[{ name: "timo" }]];

const el2 = objArr2.pop()?.pop()?.name;
// using bang to force the data the .pop() to be a string
const el3 = objArr2.pop()!.pop()!.name;

// creating a function without assigning the data type it would return
function add(x: number, y: number) {
  return x + y;
}

// creating a function and assigning the data type it would return
function add2(x: number, y: number): number {
  return x + y;
}

// A function with an optional parameter of middleName
function makeName(firstName: string, lastName: string, middleName?: string) {
  if (middleName) return firstName + " " + middleName + " " + lastName;
  return firstName + " " + lastName;
}

// a function that recieves a function and using arrow function to assign the return data type of the passed function
function callFunc(
  func: (f: string, l: string, m?: string) => string,
  param1: string,
  param2: string
) {
  func(param1, param2);
}

function mul(x: number, y: number) {
  return x * y;
}

function div(x: number, y: number) {
  return x / y;
}

// a function that accepts an array of functions and a tuple of values
function applyFunc(
  funcs: ((a: number, b: number) => number)[],
  // an array of array = tuple ,of number data type e.g [[2,3],[4,5]]
  values: [number, number][]
): number[] {
  const results = [] as number[];
  for (let i = 0; i < funcs.length; i++) {
    const args = values[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }
  return results;
}

// calling the function by passing an array of function and an array of arrays (tuple)
applyFunc(
  [mul, div],
  [
    [2, 3],
    [4, 5],
  ]
);

// an overloaded function
// creating an overloaded function that returns unknown you create a function with thesame name with the function that handle different data types possible like the example below
function getItemLength(name: string): number;
function getItemLength(names: string[]): string;
function getItemLength(nameOrNames: unknown): unknown {
  if (nameOrNames === "string") {
    return nameOrNames.length;
  } else if (Array.isArray(nameOrNames)) {
    return "This is an Array";
  }
}

// returns a number
getItemLength("");

// returns a string
getItemLength(["", ""]);

// Basic interface
interface Person {
  name: string;
  age: number;
  // creating an optional attribute by adding ?
  heigth?: number;
  hello: () => void;
}

// using the interface to create an object
const person: Person = {
  name: "Abdullahi",
  age: 0,
  hello: function () {
    console.log(this.name + " says hi");
  },
};

// advanced use of interface

// an interface exyending another interface
interface employee extends Person {
  employeeId: number;
}

// creating an obejct using the extended interface
const worker: employee = {
  name: "tim",
  age: 23,
  heigth: 10,
  employeeId: 12,
  hello: function () {
    console.log(this.employeeId);
  },
};

// Class

class People {
  // acces modifiers include: private, protected, public: which is the default
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello my name is ${this.name}`);
  }

  getName() {
    // adding a guard clause that account for empty name
    if (this.name.length < 2) "";
    return this.name;
  }

  setName(name: string) {
    // adding a guard clause that account for empty/no name is passed
    if (name.length < 2) return;
    this.name = name;
  }
}

const p1 = new People("tim");

// creating an abstact class

// an abstract function is a function that an instance can not be created on. But a class can extend it
abstract class Animal {
  abstract makeSound(duration: number): void;
  move(duration: number) {
    console.log("Moving along.....");
    this.makeSound(duration);
  }
}

class Dog extends Animal {
  // when inheriting an abstarct class all the abstract mwthods need to be implemented
  makeSound(duration: number): void {
    console.log("woof woof");
  }
}

const dog = new Dog();

// interface and classes

// Creating an animal interface
interface Animal {
  speak(): void;
}

// an interface is inherited using "implements" as against class that is inherited using extends
class Dog2 implements Animal {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  makeSound(duration: number): void {
    throw new Error("Method not implemented.");
  }
  move(duration: number): void {
    throw new Error("Method not implemented.");
  }

  speak() {
    console.log(`I am ${this.name} and I am ${this.color}`);
  }
}
