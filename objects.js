
const employee = {
    id: 101,
    name: "Anil",
    age: 23,
    department: "IT",
    salary: 30000
};

console.log("Employee:", employee);
console.log("ID:", employee.id);
console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);

employee.salary = 35000;
console.log("Updated Salary:", employee.salary);

employee.city = "Vizianagaram";
console.log("City:", employee.city);

const keys = Object.keys(employee);
console.log("Keys:", keys);

const values = Object.values(employee);
console.log("Values:", values);

const entries = Object.entries(employee);
console.log("Entries:", entries);

console.log("Has Name:", "name" in employee);
console.log("Has Email:", "email" in employee);
