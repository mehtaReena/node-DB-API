const expect =require('expect');
const request=  require('supertest');
const {ObjectID}=require('mongodb');

const {app} =require('./../server');
const {tests} =require('./../models/tests');

const testsList= [{
    _id: new ObjectID(),
    text: 'First test todo'
  }, {
    _id: new ObjectID(),
    text: 'Second test todo'
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


describe('Test Case :/getTestByID/:id',()=>{
    
    it('it should return testData of given ID',(done)=>{
         request(app)
         .get(`/getTestByID/${testsList[0]._id.toHexString()}`)         
         .expect(200)
         .expect((res)=>{
            expect(res.body.text).toBe(testsList[0].text);
         })
         .end(done);



    });



    it('it should return 404 if test not for  given ID',(done)=>{
        var hexid= new ObjectID().toHexString();
        request(app)
        .get(`/getTestByID/${hexid}`)         
        .expect(404) 
           
        .end(done);



   });


   it('it should return 404 nonObject Id ',(done)=>{
    request(app)
    .get(`/getTestByID/123`)         
    .expect(404)
    
    .end(done);
});




    


});