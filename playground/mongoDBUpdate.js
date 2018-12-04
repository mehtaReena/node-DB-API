const{MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/UserDB',(err,client)=>{
   if(err){
      return console.log('Unable to connect to mongoDB Server !!')
   }
   console.log('Connected to MongoDB srever.');
   const db=client.db('UserDB');


    //Update on findOne  ************
    db.collection('Todos').findOneAndUpdate({
        _id:new ObjectID('5c01b6e8e588533fa8330eea')
          },{
        
        $set:{
            name:"Sumit"            
        },
        $inc: { "Age" : 5 }
        },   
         {
            returnOriginal:false
            }).then((result)=>{
        console.log(result);

    });
      
    

   
 
  client.close();
});