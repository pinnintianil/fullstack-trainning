
class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = "ApiError";
    }
}

function fakeApi(name, data) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;

        console.log(name + " request started");

        setTimeout(() => {
            const failed = Math.random() < 0.5;

            if (failed) {
                reject(new ApiError(name + " API failed"));
            } else {
                resolve(data);
            }
        }, delay);
    });
}

async function retryApi(name, data, retries = 3) {
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            console.log(name + " attempt: " + (attempt + 1));

            const result = await fakeApi(name, data);

            console.log(name + " loaded successfully");
            return result;
        } catch (error) {
            console.log(error.message);

            if (attempt === retries) {
                throw error;
            }

            console.log("Retrying " + name);
        }
    }
}

async function main() {
    try {
        const results = await Promise.all([
            retryApi("Users", ["Anil", "Ravi"]),
            retryApi("Orders", ["Order 101", "Order 102"])
        ]);

        console.log("Users:", results[0]);
        console.log("Orders:", results[1]);
        console.log("All data loaded successfully");
    } catch (error) {
        console.log("Final error:", error.message);
    }
}

main();
