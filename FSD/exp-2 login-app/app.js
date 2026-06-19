const express = require('express');  
const bodyParser = require('body-parser');  
const app = express();  
const PORT = 3000;  
// Middleware  
app.use(bodyParser.urlencoded({ extended: true }));  
// Sample user (for demo)    
const user = {  
username: "admin",  
password: "1234"  
};  
// Login Form Route  
app.get('/', (req, res) => {  
res.send(`  
<h2>User Login</h2>  
<form method="POST" action="/login">  
<label>Username:</label>  
<input type="text" name="username" required/><br><br>  
<label>Password:</label>  
<input type="password" name="password" required/><br><br>  
<button type="submit">Login</button>  
</form>  
`);  
});  
// Login Logic  
app.post('/login', (req, res) => {  
const { username, password } = req.body;  
if (username === user.username && password === user.password) {  
res.send("<h2>Login Successful</h2>");  
} else {  
res.send("<h2>Invalid Username or Password</h2>");  
}  
});  
// Start Server  
app.listen(PORT, () => {  
console.log(`Server running at http://localhost:${PORT}`);  
});