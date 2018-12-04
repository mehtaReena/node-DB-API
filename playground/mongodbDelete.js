const{MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/UserDB',(err,client)=>{
   if(err){
      return console.log('Unable to connect to mongoDB Server !!')
   }
   console.log('Connected to MongoDB srever.');
   const db=client.db('UserDB');
    //Delete many***************
   /*  db.collection('Todos').deleteMany({name:'Reena'}).then((res)=>{
   
        console.log(res);

    }); */

    
   //Delete one ************
    db.collection('Todos').deleteOne({name:'Reena4'}).then((res)=>{
   
        console.log(res);

    });


    //Delete on findOne  ************
    db.collection('Todos').remove({"Age":{"$gt":30}})
    .then((res)=>{
   
        console.log(JSON.stringify(res.ops,undefined,2));

    });
 


    
 
  // client.close();
});