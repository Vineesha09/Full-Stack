const { MongoClient } = require('mongodb');  
// Connection URL  
const url = 'mongodb://127.0.0.1:27017';  
const client = new MongoClient(url);  
// Database Name  
const dbName = 'StudentDB';  
async function main() {  
await client.connect();  
console.log("Connected to MongoDB");  
const db = client.db(dbName);  
// 1⃣ Create Collection  
const collection = db.collection('students');  
console.log("Collection created");  
// 2⃣ Insert Document  
await collection.insertOne({  
name: "Sandeep",  
age: 30,  
course: "B.Tech"  
});  
console.log("Document inserted");  
// 3⃣ Insert Multiple Documents  
await collection.insertMany([  
{ name: "Rahul", age: 21, course: "B.Sc" },  
{ name: "Anita", age: 22, course: "B.Com" }  
]);  
console.log("Multiple documents inserted");  
// 4️⃣ Read Documents  
const data = await collection.find().toArray();  
console.log("Documents in collection:");  
console.log(data);  
// 5️⃣ Update Document  
await collection.updateOne(  
{ name: "Sandeep" },  
{ $set: { age: 31 } }  
);  
console.log("Document updated");  
// 6️⃣ Delete Document  
await collection.deleteOne({ name: "Rahul" });  
console.log("Document deleted");  
// 7⃣ Drop Collection (Optional)  
// await collection.drop();  
// console.log("Collection dropped");  
await client.close();  
}  
main(); 