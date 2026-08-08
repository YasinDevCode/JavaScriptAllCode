//----Using All Method ----Arrow Function, Object, Array, map(), filter(),
//  find(), reduce(), Template Literal, Ternary Operator, Optional Chaining, Conditional Logic

//একটি School-এর Student Result System বানাতে হবে। 
const student = {
    name: "Yasin",
    roll: 101,
    marks: {
        bangla: 80,
        english: 78,
        math: 85,
        science: 92
    }
}; //-----এখানে আমরা Nested Object ব্যবহার করেছি। Student এর Marks একটি Object হিসেবে আছে।

const getGrade = average => {
    if (average >= 80) return "A+";
    if (average >= 70) return "A";
    if (average >= 60) return "B";
    if (average >= 50) return "C";
    if (average >= 40) return "D";

    return "F";
}; // ---এখানে আমরা একটি Function বানিয়েছি। যেটি Average Marks অনুযায়ী Grade Return করবে।

const marks = Object.values(student.marks);

const total = marks.reduce(
    (sum, mark) => sum + mark,
    0
); //---Object.values() দিয়ে সব Mark বের করেছি। তারপর reduce() দিয়ে সব Mark যোগ করেছি।

const average = total / marks.length;

const grade = getGrade(average);

const status = average >= 40
    ? "Pass"
    : "Fail"; //---Ternary Operator দিয়ে Status বের করেছি। Average 40 এর বেশি হলে Pass, না হলে Fail।

const result = `
========== STUDENT RESULT ==========
Name    : ${student.name}
Roll    : ${student.roll}

Total   : ${total}
Average : ${average.toFixed(2)}
Grade   : ${grade}
Status  : ${status}
=====================================
`;

console.log(result); //---Output: Student Result with Name, Roll, Total, Average, Grade, and Status
//-- এখানে কতগুলো Concept একসাথে ব্যবহার হলো?
// 1. Nested Object
// 2. Object.values()
// 3. reduce()
// 4. Template Literal
// 5. Ternary Operator
// 6. Function
// ৭. final result Output


// Real project Example-2

//--Final Challenge: Complete Cart Processor
const cart = [
    {
        name: "Laptop",
        price: 80000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1500,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 3000,
        quantity: 1
    }
]; //---এখানে আমরা একটি Array of Objects ব্যবহার করেছি। প্রতিটি Product একটি Object হিসেবে আছে। প্রতিটি Product এর Name, Price, এবং Quantity আছে।

const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
); //---reduce() দিয়ে সব Product এর Quantity যোগ করেছি। Total Items বের করেছি।

const subtotal = cart.reduce(
    (total, product) =>
        total + product.price * product.quantity,
    0
); //---reduce() দিয়ে সব Product এর Price এবং Quantity গুণ করেছি। Subtotal বের করেছি।

const shipping = subtotal >= 50000
    ? 0
    : 100; //---Ternary Operator দিয়ে Shipping Cost বের করেছি। Subtotal 50000 এর বেশি হলে Shipping Free, না হলে 100 BDT।

const grandTotal = subtotal + shipping; //---Grand Total বের করেছি। Subtotal এবং Shipping যোগ করেছি।

const summary = `
========== ORDER SUMMARY ==========

${cart
    .map(product =>
        `${product.name} × ${product.quantity} = ${
            product.price * product.quantity
        } BDT` //---Template Literal দিয়ে Product Summary বানানো হয়েছে।
    )
    .join("\n")} 
    //---map() দিয়ে প্রতিটি Product এর Name, Quantity, এবং Total Price বের করেছি। join() দিয়ে সব Product Summary একসাথে দেখানো হয়েছে।

------------------------------------
Items       : ${totalItems}
Subtotal    : ${subtotal} BDT
Shipping    : ${shipping} BDT
Grand Total : ${grandTotal} BDT
====================================
`; //---Template Literal দিয়ে Final Summary বানানো হয়েছে। Cart এর সব Product Summary, Total Items, Subtotal, Shipping, এবং Grand Total দেখানো হয়েছে।

console.log(summary);

//-- এখানে কতগুলো Concept একসাথে ব্যবহার হলো?
// 1. Array of Objects
// 2. reduce()
// 3. map() 
// 4. join()
// 5. Template Literal
// 6. Ternary Operator
// 7. final result Output
//৮. Backtick (``) ব্যবহার করে Multi-line String বানানো হয়েছে।


// ------------Real Project Example

//---E-commerce Website-এ Admin যদি বলে: "আজ সব Product-এ 10% Discount চলবে।
const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 },
    { name: "Monitor", price: 25000 }
]; //---এখানে আমরা একটি Array of Objects ব্যবহার করেছি। প্রতিটি Product একটি Object হিসেবে আছে। প্রতিটি Product এর Name এবং Price আছে।
//--ডেভেলপার পরিবর্তন 
const discountedProducts = products.map(product => ({
    ...product,
    price: product.price * 0.90 // 100 থেকে ১০ % কম ০.৮০ দিলে ২০% কম দেখাবো আউটপুট
})); //---map() দিয়ে প্রতিটি Product এর Price 10% কমানো হয়েছে। Spread Operator (...) দিয়ে Original Product Object কে Copy করা হয়েছে। তারপর Price 10% কমানো হয়েছে।

console.log(discountedProducts); //---Output: Discounted Products with 10% Off


//---------Manual Change off -- এডমিন পরিবর্তন সিস্টেম। 
const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 },
    { name: "Monitor", price: 25000 }
];

const applyDiscount = (products, discount) => {
    return products.map(product => ({
        ...product,
        price: product.price * (1 - discount)
    }));
};

const discountedProducts = applyDiscount(products, 0.20);

console.log(discountedProducts); //---Output: Discounted Products with 20% Off