// Import File System module  
const fs = require('fs');  
// Write to a file  
fs.writeFile('sample.txt', 'Hello, this is Node.js File Handling!\n', (err) => {  
if (err) throw err;  
console.log('File created and data written successfully.');  
// Append data to file  
fs.appendFile('sample.txt', 'This is appended text.\n', (err) => {  
if (err) throw err;  
console.log('Data appended successfully.');  
// Read file  
fs.readFile('sample.txt', 'utf8', (err, data) => {  
if (err) throw err;  
console.log('\nFile Content:\n' + data);  
// Rename file  
fs.rename('sample.txt', 'newSample.txt', (err) => {  
if (err) throw err;  
console.log('File renamed successfully.');  
// Delete file  
fs.unlink('newSample.txt', (err) => {  
if (err) throw err;  
console.log('File deleted successfully.');  
});  
});  
});  
});  
}); 
