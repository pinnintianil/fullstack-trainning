function outerFunction(name) {
    let count = 0;

    function innerFunction() {
        count++;
        console.log("Name:", name);
        console.log("Count:", count);
    }

    return innerFunction;
}

const user1 = outerFunction("Anil");
const user2 = outerFunction("Ravi");

user1();
user1();
user1();

user2();
user2();

console.log("Closure example completed");

function greet(message) {
    return function (name) {
        console.log(message + ", " + name);
    };
}

const sayHello = greet("Hello");
sayHello("Anil");
sayHello("Ravi");