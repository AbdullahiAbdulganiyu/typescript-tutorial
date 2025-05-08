let x: number = 3;
let y: string = "Three";
let z: boolean = true;
let a: number | string = 3;

const arr: number[] = [1, 2, 3];
const arr2: string[] = ["1", "2", "3"];

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

let b: unknown = 1;

if (typeof b === "number") {
  const calc = b + 1;
} else if (typeof b === "string") {
  const calc2 = b + "hello";
}

const result0 = (b as number) + 1;

let d: any = 4;

const result = d + 2;
const result2 = d + "nice";

const objArr = [{ name: "tim" }, { name: "joe" }, { name: "jade" }];

const el = objArr.pop()?.name;

const objArr2 = [[{ name: "timo" }]];

const el2 = objArr2.pop()?.pop()?.name;

const el3 = objArr2.pop()!.pop()!.name;

function add(x: number, y: number) {
  return x + y;
}

function add2(x: number, y: number): number {
  return x + y;
}

function makeName(firstName: string, lastName: string, middleName?: string) {
  if (middleName) return firstName + " " + middleName + " " + lastName;
  return firstName + " " + lastName;
}

function callFunc(
  func: (f: string, l: string, m?: string) => string,
  param1: string,
  param2: string
) {
  func(param1, param2);
}
