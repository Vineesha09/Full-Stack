const http = require('http');  
const url = require('url');  
http.createServer((req, res) => {  
// Parse URL and Query String  
const parsedUrl = url.parse(req.url, true);  
const queryData = parsedUrl.query;  
// If user submits form  
if (parsedUrl.pathname === '/submit') {  
const name = queryData.name;  
const age = queryData.age;  
res.writeHead(200, { 'Content-Type': 'text/html' });  
res.write(`<h2>Form Data Received</h2>`);  
res.write(`<p>Name: ${name}</p>`);  
res.write(`<p>Age: ${age}</p>`);  
res.end();  
}   
else {  
// Display Form  
res.writeHead(200, { 'Content-Type': 'text/html' });  
res.write(`  
<h2>User Form</h2>  
<form method="GET" action="/submit">  
Name: <input type="text" name="name" /><br><br>  
Age: <input type="text" name="age" /><br><br>  
<input type="submit" value="Submit" />  
</form>  
`);  
res.end();  
}  
}).listen(3000, () => {  
console.log("Server running at http://localhost:3000");  
}); 