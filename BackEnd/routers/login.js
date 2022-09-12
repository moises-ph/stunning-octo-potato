const express = require('express');
const router = express.Router();
const joi = require('joi');
const jwt = require('jsonwebtoken');

const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});


router.post('/', (req, res)=>{
  const { email, password } = req.body;
  const {error} = loginValidator.validate(email, password);
  if(error) res.status(400).send(error.message);


});

module.exports = router;