const {Schema, model} = require ('mongoose');

const User = new Schema({
  name: {type:String,require:true},
  email: {type:String,required:true},
  password: {type:String,required:true},
  gender: {type:String,required:true},
  nationality: {type:String,required:true},
  DateOfBirth: {type:String,required:true}
});
const Favorites = new Schema({
  Peliculas: [{
    Title: {type:String,required:true},
    Description: {type:String,required:true},
    Favid: {type:String,required:true},
    name:{ type:Schema.ObjectId,ref:'User'}
  }],
  Libros: [{
    Title: {type:String,required:true},
    Description: {type:String,required:true},
    Favid: {type:String,required:true},
    name:{ type:Schema.ObjectId,ref:'User'}
  }]
});
const UserSchema= model('User',User);
const FavoritesSchema= model('Fav',Favorites);
module.exports= {UserSchema,FavoritesSchema};