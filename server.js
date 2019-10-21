const apiRoutes = require('./server/src/routes/index')
const next = require('next')
const routes = require('./routes')
const next_app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(next_app)
const express = require('express')
const path = require('path');
const models = require('./server/src/models/index');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

// if (process.env.PROCESS = "DEVELOPMENT") {
//   models.sequelize.sync().then(function () {
//     server.listen(port);
//     server.on('error', onError);
//     server.on('listening', onListening);
//   });
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes)

next_app.prepare().then(() => {
  app.use(handler).listen(3000,()=>console.log("Listening on port 3000"))
})