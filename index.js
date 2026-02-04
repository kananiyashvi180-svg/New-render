const express = require("express");

const app = express();

app.use(express.json());


const users = [
    { id: 1, name: "Arjun", role: "student" },
    { id: 2, name: "Priyesha", role: "mentor" }
];


app.get("/users", (req, res) => {
  res.status(200).json(users);
});



app.get("/users/:test", (req, res) => {
    console.log(req.params);
    console.log("first code")
    res.status(200).json(users);
})
app.get("/users/three", (req, res) => {
    console.log(req.params);
    console.log("second code")
    res.status(200).json(users);
});



app.listen(3000, () => {
    console.log("Server started on port 3000");
});
