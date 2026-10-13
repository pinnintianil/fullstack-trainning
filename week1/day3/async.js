funnction fakeApi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Users data received");
        }, 2000);
    });
}

async function main() {
    const result = await fakeApi();
    console.log(result);
}

main();