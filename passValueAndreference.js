// Pass by Value and Pass by Reference
// Syntax: Pass by Value
syntax: let x = 5;
let y = x; // Pass by value
y = 10;
console.log(x); // Output: 5
console.log(y); // Output: 10
// Real life Example
let originalPrice = 100;
let discountedPrice = originalPrice;
discountedPrice *= 0.9; // Apply a 10% discount 
console.log(originalPrice); // Output: 100
console.log(discountedPrice); // Output: 90
// Real life Example-2
let originalScore = 85;
let newScore = originalScore;
newScore += 10;
console.log(originalScore); // Output: 85
console.log(newScore); // Output: 95


// Syntax: Pass by Reference
syntax: let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; // Pass by reference
obj2.name = "Bob";
console.log(obj1.name); // Output: "Bob"
console.log(obj2.name); // Output: "Bob"
// Real life Example
let originalProduct = { name: "Laptop", price: 1000 };
let updatedProduct = originalProduct;
updatedProduct.price = 1200;
console.log(originalProduct.price); // Output: 1200
console.log(updatedProduct.price); // Output: 1200

// Real life Example-2
let originalUser = { username: "user1", email: "user1@example.com" };
let updatedUser = originalUser;
updatedUser.email = "newemail@example.com";
console.log(originalUser.email); // Output: "user1@example.com"
console.log(updatedUser.email); // Output: "newemail@example.com"
