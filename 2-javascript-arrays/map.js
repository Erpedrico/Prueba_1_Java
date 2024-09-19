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

const studentNames = students.map(function (student) {
  return {
     fullname: `${student.name} ${student.lastname}`,
  }
})

const studentCourses =  students.map(function (student) {
  return {
    course: "Programming"
  }
})

const studentNames2 = students.map((student) => {
  return {
    fullname: `${student.name} ${student.lastname}`,
  };
});

const doubleAges = students.map((student) => student.age).map((age) => age * 2);

const studentsInfo = students.map((student) =>  {
  return {
    fullname: `${student.name} ${student.lastname}`,
    age: student.age
  };
});

// const texts = studentsInfo.map((student) =>  {
//   return `${student.fullname} is ${student.age} years old`;
// })

// const texts = students
//   .map((student) => ({
//     fullName: `${student.name} ${student.lastname}`,
//     age: student.age,
//   }))
//   .map((student) => `${student.fullName} is ${student.age} years old`);


const courseProgramming = students.map((student) => ({
    ...student,
    course: "Programming",
}));


