
const employees = [
  { name: "Anil", salary: 45000 },
  { name: "Ravi", salary: 65000 },
  { name: "Priya", salary: 55000 },
  { name: "Lokesh", salary: 98000 },
  { name: "Abhishek", salary: 95000 }
];

console.log("Employee Salaries:");

employees.forEach(employee => {
  console.log(employee.name + " - ₹" + employee.salary);
});

const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);

const averageSalary = totalSalary / employees.length;

const topThree = [...employees]
  .sort((a, b) => b.salary - a.salary)
  .slice(0, 3);

console.log("Total Salary: ₹" + totalSalary);
console.log("Average Salary: ₹" + averageSalary);
console.log("Top 3 Highest Salaries:", topThree);
