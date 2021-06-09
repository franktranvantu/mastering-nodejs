const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
    .then(() => console.log('Connected to MongoDB.'))
    .catch(error => console.error('Could not connect to MongoDB.', error));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);
const course = new Course({
    name: 'Mastering NodeJS',
    author: 'Frank',
    tags: ['node', 'backend'],
    isPublished: true
});