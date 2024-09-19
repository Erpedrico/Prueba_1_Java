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

const sortedStudents1 = students.sort(function (first, second) {
  if (first.age > second.age) {
    return 1;
  } else {
    return -1;
  }
});

const sortedStudents2 = students.sort((a, b) => a.age > b.age ? 1 : -1)

const sortedStudents3 = students.sort((a, b) => a.age - b.age);
