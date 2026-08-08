// -- Object Methods তোমাকে Object-এর Data Manage করতে সাহায্য করে,
// syntax: objectName.methodName()

// object.keys() - Object-এর Key গুলো Return করে
const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "city"]

// object.values() - Object-এর Value গুলো Return করে
const values = Object.values(person);
console.log(values); // Output: ["Alice", 25, "New York"]

// object.entries() - Object-এর Key-Value জোড়াগুলো Return করে
const entries = Object.entries(person);
console.log(entries); // Output: [["name", "Alice"], ["age", 25], ["city", "New York"]]


// object.assign() - Object-এর Properties Copy করে
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log(result); // Output: { a: 1, b: 4, c: 5 }
console.log(target); // Output: { a: 1, b: 4, c: 5 }    

// Real life Example --Admin Dashboard-এ User Information দেখাতে হবে।

const adminDashboard = {
    users: [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" }
    ],
    getUserInfo: function(userId) {
        return this.users.find(user => user.id === userId);
    }
};
console.log(adminDashboard.getUserInfo(1)); // Output: { id: 1, name: "Alice", email: "alice@example.com" }
//--Some Example for keys and values
const user = {
    name: "Yasin",
    email: "yasin@example.com",
    role: "Developer"
};

Object.keys(user).forEach(key => {
    console.log(key);
});

Object.values(user).forEach(value => {
    console.log(value);
}); // output: 
//-----------------🚋----------------------//
//--Problem কী?
const user = {
    name: "Yasin"
};

console.log(user.address.city);//--Error
//--সমাধান----//
console.log(user.address?.city);//-- Error আসবে না। 

//--উদাহরণ---//
const user = {
    name: "Yasin",
    address: {
        city: "Jashore"
    }
};

console.log(user.address?.city);//---output: Jashore 
//------------------------------------//

// Most Expensive product finder 
const products = [
    {
        name: "Laptop",
        price: 80000
    },
    {
        name: "Mouse",
        price: 1500
    },
    {
        name: "Monitor",
        price: 25000
    },
    {
        name: "Keyboard",
        price: 3000
    }
];

//------সাধারণ ভাবে -- ArrayFunction + reduce + Ternary Operator ব্যবহার করে Most Expensive Product বের করা যাবে।
const mostExpensive = products.reduce((highest, product) => {
    return product.price > highest.price
        ? product
        : highest;
});

console.log(mostExpensive); // Output: { name: "Laptop", price: 80000 }

// reduce() হলো JavaScript এর একটি array method, যা array-এর সব element কে একসাথে নিয়ে একটা single value বানায়।
const mostExpensive = products.reduce(
    (highest, product) =>
        product.price > highest.price
            ? product
            : highest
);

console.log(
    `Most Expensive: ${mostExpensive.name}
Price: ${mostExpensive.price} BDT`
);

//-----এটি একটি Arrow Function + reduce + Ternary Operator একসাথে ব্যবহার করা../