let numbers = [10, 20, 30, 40, 50];

console.log(numbers);

console.log(numbers[0]);
console.log(numbers[2]);

numbers.push(60);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.forEach(function(number) {
    console.log(number);
});

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

let result = numbers.find(function(number) {
    return number > 25;
});

console.log(result);

let index = numbers.indexOf(30);
console.log(index);

let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);

numbers.reverse();
console.log(numbers);