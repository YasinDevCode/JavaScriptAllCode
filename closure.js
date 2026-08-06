// syntax of closure
    syntax: function outerFunction() {
        let outerVariable = 'I am from outer function';
        return function innerFunction() {
            let innerVariable = 'I am from inner function';
            console.log(outerVariable); // Accessing outer variable
            console.log(innerVariable); // Accessing inner variable
        }
    }
// Closure Example
function cashMethod(){
    let amount = 0;
    return function(payableAmount){
        amount += payableAmount;
        return amount;
    }
}

let coffeshopRegister = cashMethod();
let restaurant = cashMethod();

console.log(coffeshopRegister(200));
console.log(restaurant(300));

// Bank account closure
function createBankAccount() {
    let balance = 0;

    return function(amount) {
        balance += amount;
        return balance;
    };
}

let myAccount = createBankAccount();

console.log('my Amount=',myAccount(500));   // 500
console.log('my Amount=',myAccount(200));   // 700
console.log('my Amount=',myAccount(-100));  // 600
