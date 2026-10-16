const employees = [
    { id: 1, name: "Anil", department: "IT", salary: 30000 },
    { id: 2, name: "Ravi", department: "HR", salary: 25000 },
    { id: 3, name: "Kiran", department: "IT", salary: 45000 },
    { id: 4, name: "Sita", department: "Sales", salary: 28000 },
    { id: 5, name: "Arun", department: "HR", salary: 32000 },
    { id: 6, name: "Priya", department: "IT", salary: 50000 },
    { id: 7, name: "Rahul", department: "Sales", salary: 35000 },
    { id: 8, name: "Meena", department: "Finance", salary: 40000 },
    { id: 9, name: "Vijay", department: "IT", salary: 38000 },
    { id: 10, name: "Rani", department: "HR", salary: 27000 },
    { id: 11, name: "Ajay", department: "Sales", salary: 42000 },
    { id: 12, name: "Pooja", department: "Finance", salary: 36000 },
    { id: 13, name: "Sai", department: "IT", salary: 33000 },
    { id: 14, name: "Kavya", department: "HR", salary: 31000 },
    { id: 15, name: "Rohit", department: "Sales", salary: 39000 },
    { id: 16, name: "Divya", department: "Finance", salary: 44000 },
    { id: 17, name: "Manoj", department: "IT", salary: 41000 },
    { id: 18, name: "Sneha", department: "HR", salary: 29000 },
    { id: 19, name: "Naveen", department: "Sales", salary: 34000 },
    { id: 20, name: "Swathi", department: "Finance", salary: 37000 },
    { id: 21, name: "Teja", department: "IT", salary: 46000 },
    { id: 22, name: "Lakshmi", department: "HR", salary: 33000 },
    { id: 23, name: "Varun", department: "Sales", salary: 31000 },
    { id: 24, name: "Deepa", department: "Finance", salary: 48000 },
    { id: 25, name: "Charan", department: "IT", salary: 29000 },
    { id: 26, name: "Mohan", department: "HR", salary: 36000 },
    { id: 27, name: "Geetha", department: "Sales", salary: 37000 },
    { id: 28, name: "Suresh", department: "Finance", salary: 32000 },
    { id: 29, name: "Harsha", department: "IT", salary: 52000 },
    { id: 30, name: "Nisha", department: "HR", salary: 28000 },
    { id: 31, name: "Krishna", department: "Sales", salary: 45000 },
    { id: 32, name: "Anu", department: "Finance", salary: 39000 },
    { id: 33, name: "Bala", department: "IT", salary: 35000 },
    { id: 34, name: "Latha", department: "HR", salary: 30000 },
    { id: 35, name: "Dinesh", department: "Sales", salary: 33000 },
    { id: 36, name: "Rekha", department: "Finance", salary: 41000 },
    { id: 37, name: "Gopi", department: "IT", salary: 39000 },
    { id: 38, name: "Mounika", department: "HR", salary: 34000 },
    { id: 39, name: "Prasad", department: "Sales", salary: 29000 },
    { id: 40, name: "Asha", department: "Finance", salary: 35000 },
    { id: 41, name: "Ramesh", department: "IT", salary: 47000 },
    { id: 42, name: "Bindu", department: "HR", salary: 26000 },
    { id: 43, name: "Surya", department: "Sales", salary: 40000 },
    { id: 44, name: "Neha", department: "Finance", salary: 43000 },
    { id: 45, name: "Pavan", department: "IT", salary: 36000 },
    { id: 46, name: "Uma", department: "HR", salary: 38000 },
    { id: 47, name: "Abhi", department: "Sales", salary: 32000 },
    { id: 48, name: "Jyothi", department: "Finance", salary: 30000 },
    { id: 49, name: "Sandeep", department: "IT", salary: 55000 },
    { id: 50, name: "Leela", department: "Finance", salary: 34000 }
];

// 1. Group employees by department
const grouped = employees.reduce((groups, employee) => {
    const department = employee.department;
    groups[department] = [...(groups[department] || []), employee];
    return groups;
}, {});

console.log("1. Department-wise Employee Count");

Object.entries(grouped).forEach(([department, members]) => {
    console.log(department, ":", members.length);
});

// 2. Calculate average salary for each department
console.log("\n2. Average Salary by Department");

Object.entries(grouped).forEach(([department, members]) => {
    const total = members.reduce((sum, employee) => sum + employee.salary, 0);
    const average = total / members.length;
    console.log(department, ":", average.toFixed(2));
});

// 3. Find top 3 highest-paid employees
const topThree = [...employees]
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 3);

console.log("\n3. Top 3 Highest-Paid Employees");
topThree.forEach(employee => {
    console.log(employee.name, "-", employee.salary, "-", employee.department);
});