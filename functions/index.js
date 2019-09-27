const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
app.get('/:id', (req, res) => res.send(Widgets.getById(req.params.id)));
app.post('/', (req, res) => res.send(Widgets.create()));
app.put('/:id', (req, res) => res.send(Widgets.update(req.params.id, req.body)));
app.delete('/:id', (req, res) => res.send(Widgets.delete(req.params.id)));
app.get('/', (req, res) => res.send(Widgets.list()));

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onCall((request, context) => {
  const data = request.data;
  return {
    request,
    uid : context.auth.uid,
  };
});

exports.addMessage = functions.https.onCall((request, response) => {
  response.send('Hi');
});
