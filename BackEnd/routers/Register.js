const express = require('express');
const bcrypt = require('bcrypt');
const validator = require('express-validator');

const { UserSchema } = require('../models');

const router = express.Router();


router.post('/', [
  check("email")
    .isEmail()
    .withMessage("Invalid email address provided")
    .trim()
    .bail(),
  check("password")
    .isLength({min:6})
    
] ,async (req , res)=>{
  const { error } = await registerValidator.validateAsync(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const { email, password, name, lastname, gender, nationality, DateOfBirth} = req.body;

  const emailExists = UserSchema.findOne({email: email}); 
  if(emailExists) return res.status(400).json({message: "email already exists"});

  try{

    const passHash = await bcrypt.hash(password, 10);

    const newUser = new UserSchema({
      email,
      passHash,
      name,
      lastname,
      gender,
      nationality,
      DateOfBirth
    });
    await newUser.save();

    res.status(200).json({success: true, message: "user saved successfully"});

  }
  catch(err){
    res.status(400).json({error: err.message});
  }
});

module.exports = router;