const express = require('express');
const bcrypt = require('bcrypt');
const joi = require('joi');

const router = express.Router();

const registerValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  
});