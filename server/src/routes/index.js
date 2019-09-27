require('dotenv').config();
const authRoutes = require('./auth');
const messagesRoutes = require('./messages');
const express = require('express');
const apiRoutes = express.Router();

apiRoutes.use('/auth', authRoutes);
apiRoutes.use('/messages', messagesRoutes);

module.exports = apiRoutes;