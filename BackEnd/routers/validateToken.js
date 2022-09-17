const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.post('/', (req,res,next)=>{
    const token = req.body.token;
    try{
        const validate = jwt.verify(token, process.env.SECRET);
        validate ? next() : res.status(400).json({error: 'invalid_token'});
    }
    catch(err){
        res.status(400).json({error: err});
    }
});

module.exports = router;