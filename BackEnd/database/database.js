const mongoose =require('mongoose');

require('dotenv').config();

const url=`mongodb+srv://Express:4ICoeXFmDTpZdfal@cluster0.jdu6sqq.mongodb.net/test`

mongoose.connect(url, {useNewUrlParser: true,useUnifiedUrlParser:true}).then(db=>{
  console.log("Db connect successful");
}).catch(err=>{
  console.log(err);
});

module.exports=mongoose;