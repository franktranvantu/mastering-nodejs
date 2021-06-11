const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const config = require('config');
require('express-async-errors');
require('./routes/startup/routes')(express());

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

process.on('unhandledRejection', ex => {
  throw ex;
});

Promise.reject(new Error('Unhandled rejection'));

const options = {
  auth: {
    user: 'admin',
    password: 'admin'
  },
  authSource: 'admin'
}
mongoose.connect('mongodb://localhost/vidly', options)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));