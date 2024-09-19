// sample array of students
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

const developers = []

for (let i = 0; i < students.length; i++) {
  if (students[i].course === 'Web Development') {
    developers.push(students[i])
  }
}

console.log(developers)

const result1 = students.filter(function (student) {
  if (student.course === 'Web Development') {
    return true
  }
})

console.log(result1);

const result2 = students.filter((student) => student.age > 21);

console.log(result2);
