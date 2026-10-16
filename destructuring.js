const student = {
    name: "Anil",
    age: 23,
    course: "MCA"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

const employee = {
    id: 101,
    department: "IT",
    salary: 25000
};

const { id, department, salary } = employee;

console.log(id);
console.log(department);
console.log(salary);

const numbers = [10, 20, 30, 40];

const [first, second, third, fourth] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);