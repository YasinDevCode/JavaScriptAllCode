// Syntax of rest and spread operator
// Rest operator syntex: ...
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Real life Example
function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}
console.log(calculateTotal(100, 200, 300)); // Output: 600



// Spread operator syntex: ...
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//Real life Example of spread
