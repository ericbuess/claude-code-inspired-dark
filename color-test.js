// Comment - should be gray italic
/* Multi-line comment
   should also be gray */

// Keywords - bright orange
const CONSTANT = "constant string";
let mutableVar = 42;
var oldVar = true;

// Functions - gold
function myFunction(param1, param2) {
  return param1 + param2;
}

// Variables - warm tan/peach
const myVariable = "test";
const anotherVar = 123;

// Strings - bright green
const string1 = "Hello World";
const string2 = 'Single quotes';
const template = `Template ${myVariable}`;

// Numbers - hot pink
const integer = 42;
const float = 3.14159;
const hex = 0xFF;

// Operators - pink
const sum = 1 + 2;
const compare = sum > 0;
const logic = true && false || true;

// Properties - light salmon
const object = {
  property1: "value",
  property2: 123,
  method() {
    console.log(this.property1);
  }
};

// Accessing properties
object.property1;
object.method();

// Types (in TypeScript)
type MyType = string;
interface MyInterface {
  prop: boolean;
}