const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/UserDB',(err,client)=>{
   if(err){
      return console.log('Unable to connect to mongoDB Server !!')
   }
   console.log('Connected to MongoDB srever.');
   const db=client.db('UserDB');

   db.collection('Todos').insertOne({
    name    :'Reena4',
    Age     : 24,
    Location:'Redmond'    
   },(err,result)=>{
       if(err){
        console.log("unable to insert User!",err);
       }
       console.log(JSON.stringify(result.ops,undefined,2));

   });
 client.close();
});