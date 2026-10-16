const order = new Promise((resolve, reject) => {
    const paymentSuccess = true;

    if (paymentSuccess) {
        resolve("Payment Successful");
    } else {
        reject(new Error("Payment Failed"));
    }
});

order
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("Order Process Finished");
    });

function getMarks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(85);
        }, 1000);
    });
}

getMarks().then((marks) => {
    console.log("Student Marks:", marks);
});

Promise.resolve("Task Completed").then((message) => {
    console.log(message);
});