
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
    tests.findById(testid).then((data)=>{
     if(!data){
      return res.status(404).send('TestID not found!');
     }
     else{
       res.send(data);
     }

    },(err)=>{

      res.status(400).send(err);
    });

   }




},(err)=>{



});



app.listen(3000, () => {

  console.log("Started on port 3000! Welcome")

});




module.exports = {
  app
}