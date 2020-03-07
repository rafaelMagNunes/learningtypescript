/*
  For programs to be useful, we need to be able to work 
  with some of the simplest units of data:
  numbers, strings, structures, boolean values, 
  and the like. In TypeScript, we support much the same 
  types as you would expect in JavaScript, 
  with a convenient enumeration type thrown in to help 
  things along.
*/

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';


let fullName: string = `Rafael Nunes`;
let age: number = 18;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${age + 1} years old next year`;

// Array
let list: number[] = [1, 2, 3];
let list_of_numbers: Array<number> = [1, 2, 3];

//Tuple
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
  console.log("This is my message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}

// Object
declare function create(o: object | null): void;

create({ prop: 0});
create(null);

// Type assertion
let someValue: any = "this is a string";
let strLengh: number = (<string>someValue).length;

let someValue2: any = "this is a string";
let strLengh2: number = (someValue as string).length;

