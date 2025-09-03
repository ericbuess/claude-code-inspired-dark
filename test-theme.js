// Claude Code Dark Theme Test File
// This file showcases various syntax highlighting colors

// Keywords and control flow
const CONSTANT_VALUE = 42;
let mutableVariable = "Hello, Claude!";
var oldStyleVar = true;

// Function definitions
function greetClaude(name, isAI = true) {
  // Comments show in muted tan
  if (isAI) {
    return `Hello ${name}, I'm Claude!`;
  } else {
    return `Nice to meet you, ${name}!`;
  }
}

// Arrow functions and classes
const analyzeCode = (code) => {
  const lines = code.split('\n');
  return lines.length;
};

class ClaudeAssistant {
  constructor(model = 'claude-3') {
    this.model = model;
    this.temperature = 0.7;
  }
  
  async generateResponse(prompt) {
    // String with escape sequences
    const formattedPrompt = `Query: "${prompt}"\nModel: ${this.model}`;
    
    // Numbers and operators
    const tokenCount = prompt.length * 1.3;
    const estimatedCost = tokenCount * 0.00001;
    
    // Regular expression
    const codePattern = /```(\w+)?\n([\s\S]*?)```/g;
    
    // Template literals
    console.log(`Processing ${tokenCount} tokens...`);
    
    // Object literals
    return {
      response: "I'll help you with that!",
      tokens: Math.round(tokenCount),
      cost: estimatedCost.toFixed(5),
      timestamp: Date.now()
    };
  }
}

// Arrays and iteration
const features = ['Syntax Highlighting', 'Auto-completion', 'Debugging'];
features.forEach((feature, index) => {
  console.log(`Feature ${index + 1}: ${feature}`);
});

// Try-catch for error handling
try {
  const assistant = new ClaudeAssistant();
  const result = await assistant.generateResponse("Explain quantum computing");
  console.log(result);
} catch (error) {
  console.error('Error:', error.message);
}

// Export statement
export { ClaudeAssistant, greetClaude };

// Special symbols and operators
const isReady = !false;
const combined = isReady && true || false;
const ternary = isReady ? 'Yes' : 'No';

// Async/await
async function main() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 'Done!';
}

/* Multi-line
   comment block
   showing comment styling */

/**
 * JSDoc documentation comment
 * @param {string} input - The input string
 * @returns {number} The processed value
 */
function processInput(input) {
  return input.length * 2;
}