const express = require('express');
const bcrypt = require('bcrypt');
const joi = require('joi');

const { UserSchema }  = require('../models')

const router = express.Router();

const registerValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  name: joi.string().required(),
  gender: joi.string().required(),
  nationality: joi.string().required(),
  DateOfBirth: joi.string().required(),
});

router.post('/', (req , res, next)=>{
  const { error } = registerValidator.validate(req.body);
  error ? res.status(400).send(error.details[0].message) : next() 
}, async (req, res, next)=>{
  const { email, password, name, gender, nationality, DateOfBirth } = req.body;
  try{

    const userExists = await UserSchema.findOne({email: email});
    if(userExists) {
      res.status(400).json({message: "Usuario ya existe"})
    }
    else{
      const passCrypt = await bcrypt.hash(password, 10);

      const newUser = new UserSchema({email,password: passCrypt, name, gender, nationality, DateOfBirth});

      await newUser.save();
      res.status(200).json({message: "Usuario creado exitosamente"});
    }
  }
  catch(Err){
    res.status(400).json({error: Err.message});
  }
});

module.exports = router;