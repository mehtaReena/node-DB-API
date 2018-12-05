var mongoose=require('mongoose');

var tests =mongoose.model('tests',{
    text:{
     type:String,
     required:true,
     minlength:2,
     trim:true
    },
    completed:{
      type:Boolean,
      default:true
    },
    completedAt:{
      type:Date,
      default:Date.now()
    }
  
  });


  module.exports={
    tests
}