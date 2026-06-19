const mongoose = require('mongoose'); 
const StudentSchema = new mongoose.Schema({ 
name: String, 
rollno: String, 
department: String, 
marks: Number 
}); 
module.exports = mongoose.model('Student', StudentSchema); 