/**
 * TEST FILE - Open this after restarting Zed
 * Each element should have a distinct color
 */

// Keywords (orange bold #FF6B35) - if, for, function, return
if (true) {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

// Strings (green #7FE068)
const message = "This should be green";
const template = `Template literals too`;

// Functions (gold #FFD700)
function testFunction(param) {
  return param * 2;
}

// Numbers (hot pink #FF69B4)
const number = 42;
const decimal = 3.14;

// Comments (gray italic #7F7F7F)
// This should be gray and italic

// Variables (peach #E6B89C)
let variable = "test";
const constant = 100;

// Properties (light salmon #FFA07A)
const obj = {
  property: "value",
  nested: {
    deep: true
  }
};

// Types (turquoise #00CED1) - if TypeScript
type MyType = string | number;

// Operators (hot pink #FF69B4)
const result = 10 + 20 * 30;
const compare = variable === constant;

/* 
  EXPECTED COLORS:
  ✓ Orange bold - keywords (if, for, function, return)
  ✓ Green - strings ("text" and `templates`)
  ✓ Gold - function names
  ✓ Hot pink - numbers and operators
  ✓ Gray italic - comments
  ✓ Peach - variables
  ✓ Light salmon - object properties
  ✓ Turquoise - types (if TypeScript)
*/