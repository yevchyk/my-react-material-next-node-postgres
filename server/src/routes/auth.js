const express =  require('express');
const UserController =  require('../controllers/UserController');
const Authorization = require('../middlewares/Authorization');
const authRoutes = express.Router();

authRoutes.post('/login', UserController.login);
authRoutes.post('/register', UserController.register);
authRoutes.get('/refresh', Authorization.authorize, UserController.refresh);

module.exports = authRoutes;