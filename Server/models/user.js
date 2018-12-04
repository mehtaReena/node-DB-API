
var mongoose=require('mongoose');

var User =mongoose.model('User',{
    name:{
     type:String,
     required:true,
     minlength:2,
     trim:true
    },
    Age:{
      type:Number
    },
    Location:{
      type:String,
      required:true,
    },
    Email_ID:{
     type:String,
     required:true,
     minlength:2,
     trim:true
    }
  
  });


  module.exports={
    User
}