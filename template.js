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
