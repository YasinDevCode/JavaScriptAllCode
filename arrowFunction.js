// Syntax of Parameterized Function

 const functionName = (parameters) => {
    // function body
};
//------------//
// two parameters
const add = (a, b) => {
    return a + b;
};
// syntax of single parameter function
const square = x => {
    return x * x;
};

// Multiple parameters statements syntax
const calculate = (a, b) => {
    const total = a + b;
    return total;
};

// No parameters syntax
const greet = () => {
    return "Hello!";
};

//..................(❁´◡`❁).....................//

// --Real Example
const multiply = (x, y) => {
    return x * y;
};  

// Real life Example
const calculateShipping = price => {
    if (price > 1000) {
        return 0;
    }

    if (price >= 500) {
        return 50;
    }

    return 100;
};

console.log(calculateShipping(1500)); // 0
console.log(calculateShipping(800));  // 50
console.log(calculateShipping(300));  // 100

// Real life Example-2
const greetUser = name => `Hello, ${name}! Welcome to our website.`;
console.log(greetUser("Alice")); // Hello, Alice! Welcome to our website.

// Real life Example-3
const calculateDiscount = (price, discount) => price - (price * discount / 100);
console.log(calculateDiscount(1000, 10)); // 900

// Real life Example-4
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullName("John", "Doe")); // John Doe
// Real life Example-5
const getGrade = mark => {
    if (mark >= 80) {
        return "A+";
    }

    if (mark >= 70) {
        return "A";
    }

    if (mark >= 60) {
        return "B";
    }

    if (mark >= 50) {
        return "C";
    }

    if (mark >= 40) {
        return "D";
    }

    return "F";
};

console.log(getGrade(85));
console.log(getGrade(72));
console.log(getGrade(55));
console.log(getGrade(30));