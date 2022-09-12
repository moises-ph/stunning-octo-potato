const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const {mongoose} = require('./database');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

const {RegisterRouter, LoginRouter} = require('./routers');


app.use('/register', RegisterRouter);
app.use('/login', LoginRouter);



app.listen(PORT, (req, res)=>{
  console.log(`Server is running on port ${PORT}`);
});