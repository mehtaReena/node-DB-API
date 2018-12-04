const expect =require('expect');
const request=  require('supertest');

const {app} =require('./../server');
const {tests} =require('./../models/tests');

const testsList=[ {
        text:"FirstTest"
        },{
            text:"SecTest"
        }];
 
beforeEach((done)=>{
 tests.remove({}).then(()=>{
  return tests.insertMany(testsList);
 }).then(()=>done());
});

describe('test Case :post/tests ',()=>{

it('should create a new testData',(done)=>{
  var text= "testing..";
 request(app)
 .post('/tests').send({text})
 .expect(200)
 .expect((res)=>{
    expect(res.body.text).toBe(text);
     
 })
 
.end((err,res)=>{
    if(err){
     return(err);
    }
    
     tests.find({text}).then((tests)=>{
         expect(tests.length).toBe(1);
         expect(tests[0].text).toBe(text);
         done();
     }).catch((e)=>done(e));


     });
    


});

it('should not create a with invalid data ',(done)=>{
    var text= "testing..";
   request(app)
   .post('/tests').send({})
   .expect(400)
   
   
  .end((err,res)=>{
      if(err){
       return(err);
      }
      
       tests.find().then((tests)=>{
           expect(tests.length).toBe(2);
           
           done();
       }).catch((e)=>done(e));
  
  
       });
      
  
  
  });



});

describe('/Get TestCases',()=>{
it('should get all test list',(done)=>{

  request(app)
  .get('/testList')
  .expect(200)
  .expect((res)=>{
      expect(res.body.testslist.length).toBe(2);

  })
  .end(done);
});


});