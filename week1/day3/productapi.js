
class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = "ApiError";
    }
}

function getProducts(category, products) {
    return new Promise((resolve, reject) => {
        console.log(category + " loading...");

        setTimeout(() => {
            if (products.length > 0) {
                resolve(products);
            } else {
                reject(new ApiError(category + " products not found"));
            }
        }, 1000);
    });
}

async function main() {
    try {
        const results = await Promise.all([
            getProducts("Electronics", ["Laptop", "Mobile"]),
            getProducts("Books", ["JavaScript", "Python"])
        ]);

        console.log("Electronics:", results[0]);
        console.log("Books:", results[1]);
        console.log("All products loaded");
    } catch (error) {
        console.log(error.name + ":", error.message);
    }
}

main();
