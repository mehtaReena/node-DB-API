var express = require('express');
var bodyParser = require('body-parser');

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



app.get('/testlist',(req,res)=>{
 
  tests.find().then((testslist)=>{
   res.send({testslist});

  },(err)=>{
          res.send(err);
  });

});

app.listen(3000, () => {

  console.log("Started on port 3000! Welcome")

});


module.exports = {
  app
}