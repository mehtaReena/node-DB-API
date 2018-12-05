const _= require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID}=require('mongodb');

var { mongoose } = require('./db/mongoose');
var { tests } = require('./models/tests');
var { User } = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/tests', (req, res) => {

  var test = new tests({
    text: req.body.text
  });

  test.save().then((data) => {
    res.send(data)

  }, (err) => {
    res.status(400).send(err);

  });
});



app.get('/testList',(req,res)=>{
 
  tests.find().then((testslist)=>{
   res.send({testslist});

  },(err)=>{
          res.send(err);
  });

});

app.get('/getTestByID/:id',(req,res)=>{
  var testid=req.params.id ;
   if(!ObjectID.isValid(testid)){
    return res.status(404).send('Invalid TestID!');
   }
   else{
    tests.findById(testid).then((testData)=>{
     if(!testData){
      return res.status(404).send('TestID not found!');
     }
     else{
       res.send({testData});
     }

    },(err)=>{

      res.status(400).send(err);
    });

   }




},(err)=>{



});

app.delete('/removeTest/:id',(req,res)=>{
  
  var testid=req.params.id ;
  if(!ObjectID.isValid(testid)){
   return res.status(404).send('Invalid TestID!');
  }
  else{
  tests.findByIdAndRemove(testid).then((result)=>{
      if(!result){
        return res.status(404).send('Id not found !');
      }
      else{
        return res.status(200).send({result});
      }
  },(err)=>{
    res.status(400).send(err);
  });
  }
});



app.patch('/Updatetest/:id',(req,res)=>{ 
  console.log(req.params.id);
  var testid=req.params.id ;
  var body= _.pick(req.body,['text','completed']);
  if(!ObjectID.isValid(testid)){
    return res.status(404).send('Invalid TestID!');
   }
   if(_.isBoolean(body.completed) && body.completed){
          body.completedAt=new Date().getTime();
          body.text="Updated";
   }
   else{
        body.completed=false;
        body.completedAt=null;
   }
tests.findByIdAndUpdate(testid ,{$set:body},{new:true}).then((Updatedresult)=>{
  if(!Updatedresult){
    res.status(404).send('Test Id not found !');
  }
   res.send(Updatedresult)

}).catch((err)=>{

  res.status(400).send(err);
});

});



app.listen(3000, () => {

  console.log("Started on port 3000! Welcome")

});




module.exports = {
  app
};