// satrting typescript, you follow the following process
// 1. npm install -g typescript
// 2. npm init -y
// 3. npm install typescript --save-dev
// 4. npx tsc --init

import { sub } from "./util";
import { add as Add } from "./util";
import something from "./util";

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

  //   a method created in the interface must be implemented / added to the implementation
  speak() {
    console.log(`I am ${this.name} and I am ${this.color}`);
  }
}

class Dog3 {
  // declaring a variable as static makes it possible to track the instance of the variable
  // decalaring a variable as static makes it only available on the actual class and not the instace of the class
  // for that reason it can only be accessed using the name of the actuall class
  static instanceCount: number = 0;
  name: string;

  constructor(name: string) {
    Dog3.instanceCount++;
    this.name = name;
  }

  // creating a static method that can only be accessed by the actual class and not the instatnce of the class
  static decreaseCount() {
    this.instanceCount--;
  }
}

const dog31 = new Dog3("Tim");
// accessing the static method by the actual class and not the instance of the class
console.log(Dog3.instanceCount);
// the output would be 1 because that is the first instance

const dog32 = new Dog3("John");
// accessing the static method by the actual class and not the instance of the class
console.log(Dog3.instanceCount);
// the output would be 2 because that is the second instance

// calling the static method on the actual class and not the instance of the class
Dog3.decreaseCount();

class DataStore<T> {
  // adding <T> to enable us specify the data we want the instatce of the class create
  // a.k.a making the class generic

  private items: T[] = [];

  // adding an  item to items array
  addItem(item: T): void {
    this.items.push(item);
  }

  // getting an item form the items array
  getItem(index: number): T {
    return this.items[index];
  }

  // removing an item from the items array
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  // getting all the items
  getAllItems(): T[] {
    return this.items;
  }
}

// making the return type a string
// coutesy of generic data type
const dataG = new DataStore<string>();

interface User {
  name: string;
  age: number;
}

// making the return type of user inteface
const dataG2 = new DataStore<User>();

// creating a generic function
// the function can either be of type K or V
function getValues<K, V>(key: K, value1: V, value2: V): V {
  if (key) {
    return value1;
  }
  return value2;
}

const n1: number = 1;
const n2: number = 2;

// calling the generic function can be in either of two ways
// 1. without specifying the return type, in whose case it could be determined by the parameters that are passed
getValues("hello", n1, n2);

// 2. by specifying the return type
getValues<string, number>("hi", n1, n2);

// type aliasing
// which is useful when we want to define the return type of something that is not neccessilly an object
// when working with object use interface, when working with non-object most likely use type aliasing

type Coordinates = [number, number];

function compareCoords(p1: Coordinates, p2: Coordinates) {
  return [p1[0], p2[1]];
}

// creating a union using type aliasing
// code below means it can either be string or number or boolean
type stringOrNumberOrBoolean = string | number | boolean;

// creating some interface

interface BusinessPartner {
  name: string;
}

interface ContactDetails {
  email: string;
  phone: string;
}

// creating an intersection using type aliasing
// intersection means any instance or implementation must contain both data types or instance
type BusinessContact = BusinessPartner & ContactDetails;

const contact: BusinessContact = {
  name: "tim",
  email: "tim@gmail.com",
  phone: "070",
};

// type guards
// 1. typeof
// 2. instanceof (used to check if a class is an instance of another)
// 3. in

// type narrowing is making the type of a variable, function , etc to a particular type after creating a type union
// eg

// creating a type union
type StringOrNumber = string | number;

function addN(value: StringOrNumber) {
  // using type guard to narrow the type to string
  if (typeof value === "string") {
    return value + "1";
  } else {
    return value + 1;
  }
}

// Type narrowing

// Discriminated unuion because the have some different on each of them but having thesame property name (type)
type Log = Warning | Info | Success;

interface Warning {
  // tag
  type: "warning";
  msg: string;
}

interface Info {
  // tag
  type: "info";
  text: string;
}

interface Success {
  // tag
  type: "success";
  message: string;
}

function handleMessage(log: Log) {
  switch (log.type) {
    case "warning":
      console.log(log.msg);
      break;
    case "info":
      console.log(log.text);
      break;
    case "success":
      console.log(log.message);
      break;
  }
}

// Utility type
// 1. Partial : makes all of the different properties in the type optional
// e.g

interface Todo {
  title: string;
  description: string;
}

function partialUtility(todo: Partial<Todo>) {}

// 2. Readonly: makes the properties of the type readonly i.e they cannont be changes
// e.g

interface TodoR {
  title: string;
}

const myTodo: Readonly<TodoR> = { title: "Learn TypeScript" };

// 3. Record: makes it possible to have a key and the type as a value
// e.g

interface PageInfo {
  title: string;
}

// making the key of string type and the value of PageInfo type
const pages: Record<string, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

// making the key of number type and the value of PageInfo type
const pageNumber: Record<number, PageInfo> = {
  0: { title: "Home" },
  1: { title: "About" },
  2: { title: "Contact" },
};

// 4. Pick: allows to pick some of the interface properties
// e.g
interface TodoP {
  id: number;
  title: string;
  completed: boolean;
}

// picking title and completed only the TodoP properties, i.e the type would only contain both of them
type TodoPreview = Pick<TodoP, "title" | "completed">;

const todop: TodoPreview = {
  title: "good",
  completed: true,
};

// 5. omit: it ommits any property specified in it
// e.g

// omiting the id property of the TodoP
type TodoPreview2 = Omit<TodoP, "id">;

// Namespace
namespace Utils {
  export class myClass {}
  export function myFunction() {}
  export interface NewType {
    name: string;
  }
  export const NAAMA = "nama";
}

// using the namespace
// the namespace can be used by using the name and any of the properties in the namespace like in the eaxmple below
const resultN = Utils.myFunction();
