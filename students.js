const students = [
    { id: 1, name: "Anil", department: "CSE", marks: 85 },
    { id: 2, name: "Ravi", department: "ECE", marks: 72 },
    { id: 3, name: "Kiran", department: "CSE", marks: 92 },
    { id: 4, name: "Sita", department: "IT", marks: 88 },
    { id: 5, name: "Arun", department: "ECE", marks: 65 },
    { id: 6, name: "Priya", department: "CSE", marks: 96 },
    { id: 7, name: "Rahul", department: "IT", marks: 78 },
    { id: 8, name: "Meena", department: "ECE", marks: 90 },
    { id: 9, name: "Vijay", department: "CSE", marks: 75 },
    { id: 10, name: "Rani", department: "IT", marks: 82 },
    { id: 11, name: "Ajay", department: "ECE", marks: 84 },
    { id: 12, name: "Pooja", department: "CSE", marks: 89 },
    { id: 13, name: "Sai", department: "IT", marks: 91 },
    { id: 14, name: "Kavya", department: "ECE", marks: 76 },
    { id: 15, name: "Rohit", department: "CSE", marks: 80 },
    { id: 16, name: "Divya", department: "IT", marks: 95 },
    { id: 17, name: "Manoj", department: "ECE", marks: 68 },
    { id: 18, name: "Sneha", department: "CSE", marks: 93 },
    { id: 19, name: "Naveen", department: "IT", marks: 74 },
    { id: 20, name: "Swathi", department: "ECE", marks: 87 },
    { id: 21, name: "Teja", department: "CSE", marks: 86 },
    { id: 22, name: "Lakshmi", department: "IT", marks: 79 },
    { id: 23, name: "Varun", department: "ECE", marks: 94 },
    { id: 24, name: "Deepa", department: "CSE", marks: 77 },
    { id: 25, name: "Charan", department: "IT", marks: 83 },
    { id: 26, name: "Mohan", department: "ECE", marks: 81 },
    { id: 27, name: "Geetha", department: "CSE", marks: 90 },
    { id: 28, name: "Suresh", department: "IT", marks: 67 },
    { id: 29, name: "Harsha", department: "ECE", marks: 89 },
    { id: 30, name: "Nisha", department: "CSE", marks: 84 },
    { id: 31, name: "Krishna", department: "IT", marks: 92 },
    { id: 32, name: "Anu", department: "ECE", marks: 73 },
    { id: 33, name: "Bala", department: "CSE", marks: 88 },
    { id: 34, name: "Latha", department: "IT", marks: 86 },
    { id: 35, name: "Dinesh", department: "ECE", marks: 79 },
    { id: 36, name: "Rekha", department: "CSE", marks: 95 },
    { id: 37, name: "Gopi", department: "IT", marks: 71 },
    { id: 38, name: "Mounika", department: "ECE", marks: 85 },
    { id: 39, name: "Prasad", department: "CSE", marks: 82 },
    { id: 40, name: "Asha", department: "IT", marks: 89 },
    { id: 41, name: "Ramesh", department: "ECE", marks: 91 },
    { id: 42, name: "Bindu", department: "CSE", marks: 74 },
    { id: 43, name: "Surya", department: "IT", marks: 94 },
    { id: 44, name: "Neha", department: "ECE", marks: 80 },
    { id: 45, name: "Pavan", department: "CSE", marks: 87 },
    { id: 46, name: "Uma", department: "IT", marks: 76 },
    { id: 47, name: "Abhi", department: "ECE", marks: 83 },
    { id: 48, name: "Jyothi", department: "CSE", marks: 91 },
    { id: 49, name: "Sandeep", department: "IT", marks: 98 },
    { id: 50, name: "Leela", department: "ECE", marks: 77 }
];

// 1. Group students by department
const grouped = students.reduce((result, student) => {
    result[student.department] = [
        ...(result[student.department] || []),
        student
    ];
    return result;
}, {});

console.log("Department-wise count:");

Object.entries(grouped).forEach(([department, list]) => {
    console.log(department, list.length);
});

// 2. Average marks by department
console.log("\nAverage marks:");

Object.entries(grouped).forEach(([department, list]) => {
    const total = list.reduce((sum, student) => sum + student.marks, 0);
    console.log(department, (total / list.length).toFixed(2));
});

// 3. Top 3 students
const topThree = [...students]
    .sort((a, b) => b.marks - a.marks)
    .slice(0, 3);

console.log("\nTop 3 students:");

topThree.forEach(student => {
    console.log(student.name, student.marks, student.department);
});