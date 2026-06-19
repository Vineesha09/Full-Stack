const { MongoClient } = require('mongodb');  
 
const url = 'mongodb://127.0.0.1:27017';  
const client = new MongoClient(url);  
 
const dbName = 'CollegeDB';  
 
async function runCRUD() {  
    try {  
        await client.connect();  
        console.log("Connected to MongoDB");  
 
        const db = client.db(dbName);  
        const collection = db.collection('students');  
 
        // ======================== 
        // 1⃣ CREATE Operation 
        // ======================== 
        await collection.insertMany([  
            { name: "Deepak", age: 20, course: "B.Tech" },  
            { name: "Rahul", age: 21, course: "B.Sc" },  
            { name: "Anita", age: 22, course: "B.Com" }  
        ]);  
        console.log("Documents Inserted");  
 
        // ======================== 
        // 2⃣ READ Operation 
        // ======================== 
        const students = await collection.find().toArray();  
        console.log("All Students:");  
        console.log(students);  
 
        // ======================== 
        // 3️⃣ UPDATE Operation 
        // ======================== 
        await collection.updateOne(  
            { name: "Deepak" },  
            { $set: { age: 21 } }  
        );  
        console.log("Document Updated");  
 
        // ======================== 
        // 4️⃣ DELETE Operation 
        // ======================== 
        await collection.deleteOne({ name: "Rahul" });  
        console.log("Document Deleted");  
 
        // Show Final Data 
        const finalData = await collection.find().toArray();  
        console.log("Final Data:");  
        console.log(finalData);  
 
    } catch (err) {  
        console.error(err);  
    } finally {  
        await client.close();  
    }  
}  
 
runCRUD(); 