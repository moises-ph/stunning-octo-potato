const mongoose = require ('mongoose');
const {Schema} = moongose.Schema;

const User = new Schema({
  name: {type:string,require:true},
  email: {type:string,required:true},
  password: {type:string,required:true},
  gender: {type:string,required:true},
  nationality: {type:string,required:true},
  DateOfBirth: {type:string,required:true}
})
const Favorites = new Schema({
  Title: {type:string,required:true},
  Description: {type:string,required:true},
  Favid: {type:string,required:true},
  name:{ type:Schema.ObjectId,ref:'User'}
})
const UserSchema= moongose.model('User',User);
const FavoritesSchema=moongose.model('Fav',Favorites);
module.exports= {UserSchema,FavoritesSchema};
