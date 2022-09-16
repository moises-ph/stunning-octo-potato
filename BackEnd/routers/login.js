const express = require('express');
const router = express.Router();
const joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

const { UserSchema } = require('../models')

const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});


router.post('/', (req, res, next)=>{
  const { error } = loginValidator.validate(req.body);
  error ? res.status(400).json({error: error.details[0].message}) : next()
}, async(req, res, next)=>{
  const { email, password } = req.body;
  try{
    const userExists = await UserSchema.findOne({email: email});
    if(!userExists){
      res.status(400).json({error: "Usuario no existe"});
    }
    else{
      console.log(userExists);
      const pass = await bcrypt.compare(password, userExists.password);
      if(!pass){
        res.status(400).json({error: "Contraseña incorrecta"});
      }
      else{
        const token = jwt.sign({email, id: userExists._id}, process.env.SECRET);
        res.status(200).json({token, message: "Usuario loegado exitosamente"});
      }
    }
  }
  catch(err){
    res.status(400).json({error: err.message});
  }
});

module.exports = router;