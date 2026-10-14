const employees = [
  { id: 1, name: "Anil", department: "IT", salary: 45000 },
  { id: 2, name: "Ravi", department: "HR", salary: 35000 },
  { id: 3, name: "Lokesh", department: "IT", salary: 98000 },
  { id: 4, name: "Priya", department: "Finance", salary: 55000 },
  { id: 5, name: "Abhishek", department: "IT", salary: 95000 },
  { id: 6, name: "Sita", department: "Sales", salary: 40000 },
  { id: 7, name: "Arjun", department: "Finance", salary: 92000 },
  { id: 8, name: "Kiran", department: "HR", salary: 42000 },
  { id: 9, name: "Neha", department: "Sales", salary: 48000 },
  { id: 10, name: "Rahul", department: "IT", salary: 65000 },
  { id: 11, name: "Divya", department: "Finance", salary: 58000 },
  { id: 12, name: "Manoj", department: "HR", salary: 38000 },
  { id: 13, name: "Sneha", department: "Sales", salary: 52000 },
  { id: 14, name: "Vijay", department: "IT", salary: 72000 },
  { id: 15, name: "Pooja", department: "Finance", salary: 61000 },
  { id: 16, name: "Sai", department: "Sales", salary: 44000 },
  { id: 17, name: "Kavya", department: "HR", salary: 39000 },
  { id: 18, name: "Nikhil", department: "IT", salary: 78000 },
  { id: 19, name: "Meena", department: "Finance", salary: 67000 },
  { id: 20, name: "Ajay", department: "Sales", salary: 47000 },
  { id: 21, name: "Harsha", department: "IT", salary: 69000 },
  { id: 22, name: "Swathi", department: "HR", salary: 41000 },
  { id: 23, name: "Ramesh", department: "Finance", salary: 59000 },
  { id: 24, name: "Teja", department: "Sales", salary: 53000 },
  { id: 25, name: "Mounika", department: "IT", salary: 74000 },
  { id: 26, name: "Karthik", department: "Finance", salary: 63000 },
  { id: 27, name: "Deepa", department: "HR", salary: 36000 },
  { id: 28, name: "Suresh", department: "Sales", salary: 46000 },
  { id: 29, name: "Bhavana", department: "IT", salary: 81000 },
  { id: 30, name: "Prasad", department: "Finance", salary: 57000 },
  { id: 31, name: "Keerthi", department: "Sales", salary: 51000 },
  { id: 32, name: "Varun", department: "IT", salary: 85000 },
  { id: 33, name: "Latha", department: "HR", salary: 43000 },
  { id: 34, name: "Gopi", department: "Finance", salary: 62000 },
  { id: 35, name: "Naveen", department: "Sales", salary: 49000 },
  { id: 36, name: "Anusha", department: "IT", salary: 76000 },
  { id: 37, name: "Mahesh", department: "HR", salary: 37000 },
  { id: 38, name: "Chandana", department: "Finance", salary: 66000 },
  { id: 39, name: "Tarun", department: "Sales", salary: 54000 },
  { id: 40, name: "Lakshmi", department: "IT", salary: 71000 },
  { id: 41, name: "Abhi", department: "Finance", salary: 60000 },
  { id: 42, name: "Sanjay", department: "HR", salary: 40000 },
  { id: 43, name: "Ramya", department: "Sales", salary: 50000 },
  { id: 44, name: "Praveen", department: "IT", salary: 88000 },
  { id: 45, name: "Geetha", department: "Finance", salary: 64000 },
  { id: 46, name: "Uday", department: "Sales", salary: 45000 },
  { id: 47, name: "Swetha", department: "HR", salary: 44000 },
  { id: 48, name: "Bharath", department: "IT", salary: 82000 },
  { id: 49, name: "Akhila", department: "Finance", salary: 56000 },
  { id: 50, name: "Chandu", department: "Sales", salary: 49000 }
];

const departments = employees.reduce((groups, employee) => {
  const department = employee.department;
  groups[department] = [...(groups[department] || []), employee];
  return groups;
}, {});

const averageSalaries = Object.fromEntries(
  Object.entries(departments).map(([department, staff]) => {
    const total = staff.reduce(
      (sum, employee) => sum + employee.salary,
      0
    );

    return [department, Math.round(total / staff.length)];
  })
);

const topThree = [...employees]
  .sort((a, b) => b.salary - a.salary)
  .slice(0, 3);

const searchByName = (name) =>
  employees.filter((employee) =>
    employee.name.toLowerCase().includes(name.trim().toLowerCase())
  );

console.log("Total Employees:", employees.length);
console.log("Employees Grouped by Department:", departments);
console.log("Average Salary by Department:", averageSalaries);
console.log("Top 3 Highest Paid Employees:", topThree);
console.log("Search Results:", searchByName("anil"));