const mongoose = require('mongoose');

const options = {
    auth: {
        user: 'admin',
        password: 'admin'
    },
    authSource: 'admin'
}
mongoose.connect('mongodb://localhost:27017/playground', options)
    .then(() => console.log('Connected to MongoDB.'))
    .catch(error => console.error('Could not connect to MongoDB.', error));
