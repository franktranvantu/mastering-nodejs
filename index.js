const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const error = require('./middleware/error');

const app = express();

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

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));