
class OrderError extends Error {
    constructor(message) {
        super(message);
        this.name = "OrderError";
    }
}

function getOrders(customer, orders) {
    return new Promise((resolve, reject) => {
        console.log(customer + " orders loading...");

        setTimeout(() => {
            if (orders.length > 0) {
                resolve({ customer, orders });
            } else {
                reject(new OrderError(customer + " has no orders"));
            }
        }, 1000);
    });
}

async function main() {
    try {
        const results = await Promise.all([
            getOrders("Anil", ["Order101", "Order102"]),
            getOrders("Ravi", ["Order201", "Order202"])
        ]);

        results.forEach((result) => {
            console.log("Customer:", result.customer);
            console.log("Orders:", result.orders);
        });

        console.log("All orders loaded");
    } catch (error) {
        console.log(error.name + ":", error.message);
    }
}

main();
