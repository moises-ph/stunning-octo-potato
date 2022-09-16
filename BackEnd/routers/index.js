const RegisterRouter = require('./Register');
const LoginRouter = require('./login');
const validateToken = require('./validateToken');
const Favorite = require('./Favoritos');


module.exports = {
  RegisterRouter,
  LoginRouter,
  validateToken,
  Favorite
};