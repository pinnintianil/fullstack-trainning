let promise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Data loaded successfully");
    } else {
        reject("Failed to load data");
    }
});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Promise completed");
    });