function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increase = counter();

console.log(increase());
console.log(increase());
console.log(increase());