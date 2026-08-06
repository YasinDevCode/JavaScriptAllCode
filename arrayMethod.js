// forEach Function
let numbers = [10, 20, 30];

numbers.forEach(function(number) {
    console.log('this is number value='+number);
});
// 
// Real life ForEach Example
let users = ["Rahim", "Karim", "Yasin"];

users.forEach(function(user) {
    console.log("Email Sent to " + user);
});

// Map Fuction
let newArray = array.map(function(item) {

    return item;

});
let array = [1, 2, 3, 4, 5];

let newArray2=array.map(function(item){
    return item*2
})

//--Real life Project Example 10% discount
let prices = [100, 200, 300];

let discountPrice = prices.map(function(price) {
    return price - price * 0.10;
});

console.log(discountPrice);

// Filter Function
let filteredArray = array.filter(function(item) {

return condition;

});

// Real life Project Example
// Example to filter products based on price
let products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 }
];

let filteredProducts = products.filter(function(product) {
    return product.price > 150;
});

console.log(filteredProducts);
// Example to find even numbers from an array
let numbersArray = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbersArray.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); //

// Reduce Function
let sum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);  
// Real life Project Example
// Example to calculate the total price of products
let productPrices = [100, 200, 300];
let total = productPrices.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(total); // Output: 600

// Example to find the maximum number in an array
let maxNumber = numbersArray.reduce(function(max, currentValue) {
    return currentValue > max ? currentValue : max;
}, numbersArray[0]);

console.log(maxNumber);
// Real life Project Example
// Login System
let users = [
    {id:1,name:"Rahim"},
    {id:2,name:"Yasin"},
    {id:3,name:"Karim"}
];

let user = users.find(function(item){
    return item.id === 2;
});

console.log(user);
// Real life Project Example-2
// Product Search
let products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 }
]; 
let product = products.find(function(item){
    return item.name === "Product 2";
});
console.log(product); // Output: { name: "Product 2", price: 200 }
