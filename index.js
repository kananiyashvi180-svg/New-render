const express = require("express");

const app = express();

app.use(express.json());

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});
app.get("/students", (req, res) => {
  res.send(students);
});

app.get("/students/average", (req, res) => {
  const totalCgpa = students.reduce((sum, student) => sum + student.cgpa, 0);
  // console.log(totalCgpa);
  const averageCgpa = totalCgpa / students.length;
  res.send({ averageCgpa });
});

app.get("/students/count", (req, res) => {  
  res.send({ count: students.length });
});

app.get("/students/topper", (req, res) => {
  const toppr = students.reduce((top, student) => {
    console.log(student.cgpa, top.cgpa);
    return student.cgpa > top.cgpa ? student : top;
  }, students[0]);
  res.send(toppr);
});

app.get("/students/branch/:branch", (req, res) => {
  const branch = req.params.branch.toLowerCase();

  const studentsInBranch = students.filter(
    student => student.branch.toLowerCase() === branch
  );

  res.send(studentsInBranch);
});


app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id); 
  const student = students.find(student => student.id === id);

  if (student) {
    res.send(student);
  } else {
    res.status(404).send("Student not found");
  }
  
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});