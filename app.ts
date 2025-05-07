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
