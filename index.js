const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');

const app = express();
const options = {
    auth: {
        user: 'admin',
        password: 'admin'
    },
    authSource: 'admin'
}
mongoose.connect('mongodb://localhost/vidly', options)
    .then(() => console.log('Connected to MongoDB.'))
    .catch((error) => console.error('Could not connect to MongoDB.'));

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));