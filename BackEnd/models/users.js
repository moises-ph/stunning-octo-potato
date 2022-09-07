const mongoose = require ('mongoose');
const {Schema} = require('moongose');

const User = new Schema({
  name: {type:string,require:true},
  email: {type:string,required:true},
  password: {type:string,required:true},
  gender: {type:string,required:true},
  nationality: {type:string,required:true},
  DateOfBirth: {type:string,required:true}
})

const UserSchema= moongose.model('User',User);

module.exports= {UserSchema};
