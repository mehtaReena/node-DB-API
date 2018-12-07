const jwt= require('jsonwebtoken');

 var data={
     id:10
 };

 var token =jwt.sign(data,'123ABC');
 console.log(token);

 var decode= jwt.verify(token,'123ABC');
 console.log(decode);

