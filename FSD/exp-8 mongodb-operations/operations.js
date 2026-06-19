const { MongoClient } = require('mongodb');  
const url = 'mongodb://127.0.0.1:27017';  
const client = new MongoClient(url);  
async function runOperations() {  
try {  
await client.connect();  
console.log("Connected to MongoDB");  
const db = client.db("CollegeDB");  
const collection = db.collection("students");  
// 1⃣ COUNT Operation  
const totalCount = await collection.countDocuments();  
console.log("Total Documents:", totalCount);  
// 2⃣ LIMIT Operation (First 3️ documents)  
const limitedData = await collection.find().limit(3).toArray();  
console.log("\nLimit (3️ Documents):");  
console.log(limitedData);  
// 3️⃣ SORT Operation (Sort by marks descending)  
const sortedData = await collection.find().sort({ marks: -1 }).toArray();  
console.log("\nSorted by Marks (Descending):");  
console.log(sortedData);  
// 4️⃣ SKIP Operation (Skip first 2 documents)  
const skippedData = await collection.find().skip(2).toArray();  
console.log("\nAfter Skipping 2 Documents:");  
console.log(skippedData);  
} catch (err) {  
console.error(err);  
} finally {  
await client.close();  
}  
}  
runOperations();