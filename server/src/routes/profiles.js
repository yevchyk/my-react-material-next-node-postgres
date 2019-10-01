const express =  require('express');
const usersRoutes = express.Router();
const Authorization = require('../middlewares/Authorization');
const ProfileController =  require('../controllers/ProfileController');

usersRoutes.get('', Authorization.authorize, ProfileController.usersList);

module.exports = usersRoutes;