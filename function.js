<<<<<<< HEAD
=======
function greet() {
    console.log("Hello World");
}

greet();
>>>>>>> 4da62f472fc1b5b397af082291082a68055a404b

function add(a, b) {
    return a + b;
}

<<<<<<< HEAD
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function greet(name) {
    return "Hello " + name;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));
console.log(greet("Anil"));
=======
let sum = add(10, 20);
console.log("Sum:", sum);

function square(number) {
    return number * number;
}

let result = square(5);
console.log("Square:", result);

let subtract = function(a, b) {
    return a - b;
};

console.log("Subtraction:", subtract(20, 8));

let multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("Number is:", checkEvenOdd(10));

function checkPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

let number = 17;

if (checkPrime(number)) {
    console.log(number + " is Prime Number");
} else {
    console.log(number + " is Not Prime Number");
}

function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "Fail";
    }
}

let marks = 80;

console.log("Student Grade:", getGrade(marks));
>>>>>>> 4da62f472fc1b5b397af082291082a68055a404b
