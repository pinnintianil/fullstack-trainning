const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

console.log("Addition:", add(10, 20));
console.log("Subtraction:", subtract(20, 5));
console.log("Multiplication:", multiply(4, 5));

const greet = name => {
    return "Hello " + name;
};

console.log(greet("Anil"));

const square = num => num * num;
console.log("Square:", square(5));

const isEven = num => num % 2 === 0;
console.log("Is Even:", isEven(8));

const divide = (a, b) => a / b;
console.log("Division:", divide(20, 4));

const welcome = () => "Welcome to JavaScript";
console.log(welcome());

const double = num => num * 2;
console.log(double(10));