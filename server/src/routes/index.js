require('dotenv').config();
const authRoutes = require('./auth');
const messagesRoutes = require('./messages');
const profilesRoutes = require('./profiles');
const express = require('express');
const apiRoutes = express.Router();

apiRoutes.use('/auth', authRoutes);
apiRoutes.use('/messages', messagesRoutes);
apiRoutes.use('/profiles', profilesRoutes);

module.exports = apiRoutes;