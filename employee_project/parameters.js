function greet(name = "Student") {
    console.log("Hello " + name);
}

greet("Anil");
greet();

function total(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(total(10, 20, 30));