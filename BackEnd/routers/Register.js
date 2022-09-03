const express = require('express');
const bcrypt = require('bcrypt');
const joi = require('joi');

const router = express.Router();

const registerValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  name: joi.string().required(),
  lastname: joi.string().required(),
  gender: joi.string().required(),
  country: joi.string().required(),
  birthDate: joi.string().required(),
});

router.get('/', (req , res)=>{

    
});