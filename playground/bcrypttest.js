const bcrpt=require('bcryptjs');


var password='123abc!';

 bcrpt.genSalt(10,(err,salt)=>{
    bcrpt.hash(password,salt,(err,hash)=>{
      console.log(hash);
    });
});


var  hashPWD='$2a$10$LiH/MyV7Ut7eMNP1IexGiuw17RMZDu8yjuWBso2dVU4iJNJvCAL6W';
bcrpt.compare(password,hashPWD,(err,result)=>{
    console.log(result);

});
