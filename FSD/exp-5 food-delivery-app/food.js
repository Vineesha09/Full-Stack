const http = require('http');  
const querystring = require('querystring');  
http.createServer((req, res) => {  
if (req.method === 'GET') {  
// Display Food Menu and Order Form  
res.writeHead(200, { 'Content-Type': 'text/html' });  
res.write(`  
<h1>Welcome to Tasty Bites Restaurant</h1>  
<h2>Menu</h2>  
<ul>  
<li>Pizza - ₹200</li>  
<li>Burger - ₹120</li>  
<li>Pasta - ₹180</li>  
<li>Sandwich - ₹100</li>  
</ul>  
<h2>Place Your Order</h2>  
<form method="POST">  
Name: <input type="text" name="name" required /><br><br>  
Food Item:  
<select name="food">  
<option>Pizza</option>  
<option>Burger</option>  
<option>Pasta</option>  
<option>Sandwich</option>  
</select><br><br>  
Quantity: <input type="number" name="quantity" required /><br><br>  
<input type="submit" value="Order Now" />  
</form>  
`);  
res.end();  
}  
else if (req.method === 'POST') {  
let body = '';  
req.on('data', chunk => {  
body += chunk.toString();  
});  
req.on('end', () => {  
const data = querystring.parse(body);  
res.writeHead(200, { 'Content-Type': 'text/html' });  
res.write(`  
<h1>Order Confirmation</h1>  
<p>Thank you, ${data.name}!</p>  
<p>You ordered: ${data.food}</p>  
<p>Quantity: ${data.quantity}</p>  
<p>Your food will be delivered soon</p>  
`);  
res.end();  
});  
}  
}).listen(3000, () => {  
console.log("Server running at http://localhost:3000");  
}); 