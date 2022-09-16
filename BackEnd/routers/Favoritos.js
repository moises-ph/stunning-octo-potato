const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const joi = require('joi');

const {FavoritesSchema} = require('../models')

router.post('/', (req, res)=>{
    const {token, } = req.body;
    let user_id;
    jwt.verify(token, process.env.SECRET,async (err, decoded)=>{
        if(err) return res.status(400).json({error: err})
        else{
            user_id = decoded.id;
            const userExists = await FavoritesSchema.findById(user_id);
            if(userExists){

                userExists.updateOne({_id: user_id}, );
            }
            else{
                
            }
        }
    });

});

module.exports = router;
