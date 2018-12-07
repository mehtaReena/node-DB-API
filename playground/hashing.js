const {SHA256} = require('crypto-js');

var message= 'i am user number 1';

var hash= SHA256(message).toString()
console.log(`Message : ${message}`);
console.log(`hash : ${hash}`)

var data={
    id : 4
};

var token={
  data,
  hash:SHA256(JSON.stringify(data)+'ABC').toString()
}

   /* token.data.id=5
   token.hash=SHA256(JSON.stringify(token.data.id)).toString();
 */

var resultHash=SHA256(JSON.stringify(token.data)+'ABC').toString()
if(resultHash===token.hash){
    
    console.log("valid user!! Welcome");
}
else{
    console.log("invalid user!! Do not trust !");
}