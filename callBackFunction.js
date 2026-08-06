// Syntax of callback function
Syntax: function outerFunction(callback) {
    // Perform some operations
    // Call the callback function
    callback();
}   



// Real life Example
function processUser(callback) {
    // Simulate processing a user
    console.log("Processing user...");
    // Call the callback function after processing
    callback();
}   

// Real life Example-2
function fetchData(callback) {
    // Simulate fetching data from an API                               \
    console.log("Fetching data...");                                                                                            
    // Call the callback function after fetching data       
    callback();
}




// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

// --- Example 1: A simple callback ---

// This is a function that we will use as a callback.
// It simply takes a name and logs a greeting.
function hello(name) {
    console.log("Hello " + name);
}
 
// This function takes a callback as an argument.
// It "processes" a user and then calls the callback function with the user's name.
function processUser(callback) {
    // Here, we are invoking the callback function that was passed in.
    callback("Yasin");
}

// Now, let's use it. We pass the `hello` function to `processUser`.
// `processUser` will then execute `hello("Yasin")`.
processUser(hello); // Output: Hello Yasin

// --- Example 2: Using callbacks for flexible operations (A Calculator) ---

// The main idea (মুল থিম) is to use the same function (`calculate`) to perform different tasks.
// This is a powerful use case for callbacks.

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}
function calculate(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}

// Now we can use the `calculate` function with our different operation callbacks.
console.log("Division:", calculate(10, 2, divide));     // Output: Division: 5
console.log("Addition:", calculate(10, 2, add));       // Output: Addition: 12
console.log("Multiplication:", calculate(10, 2, multiply)); // Output: Multiplication: 20
console.log("Subtraction:", calculate(10, 2, subtract));  // Output: Subtraction: 8
console.log("Division by zero:", calculate(10, 0, divide)); // Output: Division by zero: Cannot divide by zero