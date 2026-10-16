const first = [10, 20, 30];
const second = [40, 50, 60];

const combined = [...first, ...second];

console.log(combined);

const original = [1, 2, 3];
const copied = [...original];

console.log(copied);

const updated = [...original, 4, 5];
console.log(updated);

const student = {
    name: "Anil",
    age: 23
};

const updatedStudent = {
    ...student,
    course: "MCA"
};

console.log(updatedStudent);

const employee = {
    id: 101,
    salary: 20000
};

const newEmployee = {
    ...employee,
    salary: 25000
};

console.log(newEmployee);