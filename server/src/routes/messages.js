const express =  require('express');
const messagesRoutes = express.Router();
const Authorization = require('../middlewares/Authorization');
const MessageController =  require('../controllers/messageController');

messagesRoutes.post('/send', Authorization.authorize, MessageController.send);
messagesRoutes.get('', Authorization.authorize, MessageController.roomsList);
messagesRoutes.get('/:id', Authorization.authorize, MessageController.room);

module.exports = messagesRoutes; 