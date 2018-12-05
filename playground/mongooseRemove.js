const {ObjectID}=require('mongodb');
const {mongoose} = require('./../Server/db/mongoose');
const {tests} =require('./../Server/models/tests');
const {User} =require('./../Server/models/user');


tests.findByIdAndRemove('5c071d36a2954e7f50e318f6').then((testdata)=>{

console.log(testdata);

});