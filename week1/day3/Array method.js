
const numbers = [1, 2, 3];

const result = numbers.map(number => number * 2);

console.log(result);


const numbers = [10, 15, 20, 25];

const result = numbers.filter(number => number > 15);

console.log(result);


const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => sum + number, 0);

console.log(total);


const numbers = [10, 20, 30, 40];

const result = numbers.find(number => number > 20);

console.log(result);


const numbers = [10, 20, 30];

console.log(numbers.some(number => number > 25));


const numbers = [10, 20, 30];

console.log(numbers.every(number => number > 5));


const numbers = [40, 10, 30, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
