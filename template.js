// Syntax of template string
let name = "Yasin Ali";
let age = 25;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: Hello, my name is Yasin Ali and I am 25 years old.


// Real life Example
function orderConfirm(name, amount){
    let message=`Hello, ${name || "student"}, your payment successful
    your payment many is= ${amount}`
                 return message;
}
console.log(orderConfirm('yasin ali', 500));

// Real life Example-2
function orderConfirm(name, amount){
    let message=`Hello, ${name || "student"}, your payment successful
    your payment many is= ${amount}`
                    return message;
}
console.log(orderConfirm('yasin ali', 500)); // Output: Hello, yasin ali, your payment successful your payment many is= 500  

// Receipt generate template string
function generateReceipt(name, amount, date,quantity, item){
    let receipt=`Receipt:
    Name: ${name}
    Amount: ${amount}
    Date: ${date}
    Quantity: ${quantity}
    Item: ${item}`;
    return receipt;
} 
console.log(generateReceipt('Yasin Ali', 500, '2024-06-15', 2, 'Book'));  // Output: Receipt: Name: Yasin Ali Amount: 500 Date: 2024-06-15 Quantity: 2 Item: Book           
// Real life Example-2
//  Status Pending- Processing-Shipped-Delivered using template string
const order = {
    id: 101,
    customer: "Yasin",
    status: "Processing"
};

if (order.status === "Processing") {
    console.log("📦 Your order is being packed.");
}
else if (order.status === "Shipped") {
    console.log("🚀 Your order is being shipped.");
}
else if (order.status === "Delivered") {
    console.log("🎉 Your order has been delivered.");
}
// Real life receipt generation coffee shop Example-3
const order = {
    customer: "Yasin",
    items: [
        { name: "Coffee", price: 200 },
        { name: "Cake", price: 150 }
    ]
};

const total = order.items.reduce(
    (sum, item) => sum + item.price,
    0
);      
const order={
    customerNameis:"Redoy",
    items:[
        {name:'coffe',price:200},
        {name:'cake',price:300}
    ]
}
const total=order.reduce(
    (sum,item)=>sum+item.price,0
);

const receipt = `
=========== RECEIPT ===========
Customer : ${order.customer}

Items:
${order.items
    .map(item => `- ${item.name}: ${item.price} BDT`)
    .join("\n")}

-------------------------------
Total: ${total} BDT
===============================
`;

console.log(receipt); // Output: Receipt with customer name, items, and total price 

// Project Example (Online Shop) receipt generation using template string
const order = {
    customerName: "Rahim",
    status: "Delivered",
    totalTk: 5200
};

const message = `
Hello ${order.customerName},

Your order status: ${order.status}

Total Paid: ${order.totalTk} BDT

Thank you for shopping with us ❤️
`;

console.log(message); // Output: Message with customer name, order status, and total paid



