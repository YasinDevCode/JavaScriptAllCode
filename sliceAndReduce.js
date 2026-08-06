// Syntax: array.slice(start, end)
// Slice and Reduce Examples
let numbers = [1, 2, 3, 4, 5];

// Slice - Extract a portion of an array
let slicedNumbers = numbers.slice(1, 4); // Extracts elements from index 1 to 3
console.log(slicedNumbers); // Output: [2, 3, 4]

// Syntax: array.reduce(callback, initialValue)
// Reduce - Apply a function against an accumulator and each element in the array
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15
// Real life Example-1
let products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 }
];  
let totalPrice = products.reduce(function(accumulator, product) {
    return accumulator + product.price;
}, 0);
console.log(totalPrice); // Output: 600
// Real Example two
// Student Average
let marks = [80, 90, 70, 100];

let total = marks.reduce((sum, mark) => sum + mark, 0);

let average = total / marks.length;

console.log(average); // output: 85

// Real life Example
let products = [
    "Laptop", "Mouse", "Keyboard", "Monitor",
    "Printer", "Camera", "Speaker", "Phone",
    "Tablet", "SSD", "RAM", "Router"
];

let page1 = products.slice("start 1st value and 5 no value pojonto print",0, 5);
let page2 = products.slice("Start 5 no Value",5, 10);

console.log(page1);
console.log(page2);

// Real life Example-2
let prices = [100, 200, 300, 400, 500];
let totalPrice = prices.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(totalPrice); // Output: 1500