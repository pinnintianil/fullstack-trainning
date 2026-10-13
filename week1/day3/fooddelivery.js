
function placeOrder(food) {
    return new Promise((resolve, reject) => {
        console.log("Order placed:", food);

        setTimeout(() => {
            if (food !== "") {
                resolve("Order confirmed");
            } else {
                reject(new Error("Please select food"));
            }
        }, 1000);
    });
}

function prepareFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food is ready");
        }, 2000);
    });
}

function deliverFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food delivered successfully");
        }, 2000);
    });
}

async function main() {
    try {
        console.log(await placeOrder("Pizza"));
        console.log(await prepareFood());
        console.log(await deliverFood());
    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();
