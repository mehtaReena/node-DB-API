const {ObjectID}=require('mongodb');
const {mongoose} = require('./../Server/db/mongoose');
const {tests} =require('./../Server/models/tests');
const {User} =require('./../Server/models/user');

var id ='5c06148e59069d47b45e8602';

var userID='5c05af5340d5fc4a68cc27a8';

if(!ObjectID.isValid(id)){
    console.log("Invalid ID !!!....");
}
else{


tests.find({
  _id:id

}).then((data)=>{

console.log('Data...', data);

}).catch((e)=>{
    console.log(e);
     
    });


tests.findById(id).then((data)=>{
    if(!data){

    return console.log('ID not found')
    }else{
  
  console.log('Data findByID...', data);
   }
  }).catch((e)=>{
  console.log(e);
   
  });
  
}

User.find({

    _id:userID}
    
    ).then((res)=>{
 if(!res){

    return console.log('UserID not found')
    }else{
  
  console.log('User findByID...', res);
   }
  }).catch((e)=>{
  console.log(e);
   
  });