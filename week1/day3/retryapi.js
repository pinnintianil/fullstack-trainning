
function fakeAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.5;

            if (success) {
                resolve("API Success!");
            } else {
                reject(new Error("API Failed"));
            }
        }, 1000);
    });
}

async function retryAPI() {
    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
        try {
            console.log("API Attempt:", attempt);

            const result = await fakeAPI();

            console.log(result);
            return;
        } catch (error) {
            console.log(error.message);

            if (attempt === maxRetries + 1) {
                console.log("All retries failed");
                return;
            }

            console.log("Retrying API...");
        }
    }
}

retryAPI();
