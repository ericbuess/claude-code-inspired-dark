// Test file for syntax highlighting
const greeting = "Hello, World!"; // string
let number = 42; // number
var isActive = true; // boolean

// Function test
function testFunction(param1, param2) {
    return param1 + param2;
}

// Arrow function
const arrowFunc = (x, y) => x * y;

// Class test
class TestClass {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
}

// Keywords
if (isActive) {
    console.log(greeting);
} else {
    console.log("Inactive");
}

// Loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Object
const obj = {
    property: "value",
    method: function() {
        return "method";
    }
};

// Array
const arr = [1, 2, 3, 4, 5];

// Template literal
const message = `The number is ${number}`;

// Regex
const pattern = /test/gi;

// Async/await
async function fetchData() {
    const response = await fetch("https://api.example.com");
    return response.json();
}

// Try/catch
try {
    throw new Error("Test error");
} catch (error) {
    console.error(error);
}

// Export
export { TestClass, testFunction };