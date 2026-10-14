let num = 17;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is Not a Prime Number");
}