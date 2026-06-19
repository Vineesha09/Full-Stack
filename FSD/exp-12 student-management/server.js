const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const app = express(); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(express.static('public')); 
// Connect MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/studentDB') 
.then(() => console.log("MongoDB Connected")) 
.catch(err => console.log(err)); 
// Import Model 
const Student = require('./models/Student'); 
// CREATE 
app.post('/students', async (req, res) => { 
const student = new Student(req.body); 
await student.save(); 
res.send(student); 
}); 
// READ 
app.get('/students', async (req, res) => { 
const students = await Student.find(); 
res.send(students); 
}); 
// UPDATE 
app.put('/students/:id', async (req, res) => { 
const student = await Student.findByIdAndUpdate( 
req.params.id, 
req.body, 
{ new: true } 
); 
res.send(student); 
}); 
// DELETE 
app.delete('/students/:id', async (req, res) => { 
await Student.findByIdAndDelete(req.params.id); 
res.send({ message: "Student Deleted" }); 
}); 
app.listen(3️000, () => { 
console.log("Server running on port 3️000"); 
});