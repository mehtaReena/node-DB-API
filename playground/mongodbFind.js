//const MongoClient = require('mongodb').MongoClient;
//const ObjectID = require('mongodb').ObjectID;
const{MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/UserDB',(err,client)=>{
   if(err){
      return console.log('Unable to connect to mongoDB Server !!')
   }
   console.log('Connected to MongoDB srever.');
   const db=client.db('UserDB');
   db.collection('Todos').find({name:'Reena1'}).toArray().then((data)=>{
     
      console.log("Total Users :",data.length, JSON.stringify(data,undefined,2))
   },(err)=>{
    
     console.log("Unable to find!",err)

   });


   db.collection('Todos').find({
      _id: new ObjectID('5bfdd4383d852ba328c03b04')   
   }).toArray().then((data)=>{
     
      console.log("Total Users :",data.length, JSON.stringify(data,undefined,2))
   },(err)=>{
    
     console.log("Unable to find!",err)

   });
    


 client.close();
});