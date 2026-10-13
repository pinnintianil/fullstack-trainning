function getStudent(name, marks) {
    return new Promise((resolve, reject) => {
        console.log(name + " loading...");

        setTimeout(() => {
            if (marks >= 0) {
                resolve({
                    name: name,
                    marks: marks
                });
            } else {
                reject(new Error("Invalid marks"));
            }
        }, 2000);
    });
}

async function main() {
    try {
        const students = await Promise.all([
            getStudent("Anil", 85),
            getStudent("Ravi", 90)
        ]);

        console.log("Student Details:");

        console.log(students[0]);
        console.log(students[1]);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();