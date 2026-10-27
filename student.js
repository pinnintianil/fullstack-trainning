
const students = [
  {
    id: 1,
    name: "Anil",
    age: 23,
    marks: 85
  },
  {
    id: 2,
    name: "Ravi",
    age: 22,
    marks: 72
  },
  {
    id: 3,
    name: "Kiran",
    age: 21,
    marks: 35
  }
];

function displayStudents() {
  for (const student of students) {
    console.log("Student ID:", student.id);
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Marks:", student.marks);

    if (student.marks >= 40) {
      console.log("Result: Pass");
    } else {
      console.log("Result: Fail");
    }

    console.log("----------------");
  }
}

displayStudents();
