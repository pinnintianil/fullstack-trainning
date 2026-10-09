
const students = [
    { name: "Anil", marks: 85 },
    { name: "Ravi", marks: 32 },
    { name: "Priya", marks: 95 },
    { name: "Kiran", marks: 48 },
    { name: "Sneha", marks: 63 }
];

const searchName = "Priya";

const student = students.find(s => s.name === searchName);

if (student) {
    console.log("Student Found");
    console.log("Name: " + student.name);
    console.log("Marks: " + student.marks);
} else {
    console.log("Student Not Found");
}

const passedStudents = students.filter(s => s.marks >= 35);

console.log("Passed Students:");

passedStudents.forEach(s => {
    console.log(s.name + " - " + s.marks);
});
