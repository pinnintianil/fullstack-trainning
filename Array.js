
const numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

console.log("First Element:", numbers[0]);
console.log("Second Element:", numbers[1]);
console.log("Array Length:", numbers.length);

numbers.push(60);
console.log("After Push:", numbers);

numbers.pop();
console.log("After Pop:", numbers);

numbers.unshift(5);
console.log("After Unshift:", numbers);

numbers.shift();
console.log("After Shift:", numbers);

console.log("Includes 30:", numbers.includes(30));
console.log("Index of 40:", numbers.indexOf(40));

const doubled = numbers.map(num => num * 2);
console.log("Doubled Array:", doubled);

const filtered = numbers.filter(num => num > 25);
console.log("Numbers Above 25:", filtered);

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Total:", total);

numbers.forEach(num => console.log(num));
