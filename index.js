const mongoose = require('mongoose');

const options = {
    auth: {
        user: 'admin',
        password: 'admin'
    },
    authSource: 'admin'
}
mongoose.connect('mongodb://localhost/playground', options)
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

async function createCourse() {
    const course = new Course({
        name: 'Mastering NodeJS',
        author: 'Frank',
        tags: ['node', 'backend'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal)
    // lt (less than)
    // lte (less than or equal)
    // in
    // nin (not in)
    const courses = await Course
        // .find({author: 'Frank', isPublished: true})
        // .find({price: {$gt: 10, $lt: 5}})
        .find({price: {$in: [5, 10, 15]}})
        .limit(10)
        .sort({name: 1})
        .select({name: 1, tags: 1});
    console.log(courses);
}

getCourses();