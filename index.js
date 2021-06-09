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
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                }, 2000);
            },
            message: 'A course should have at least one tag.'
        }
    },
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: {
        type: Number,
        min: 10,
        max: 200,
        required: function() {
            return this.isPublished;
        }
    }
});
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Mastering NodeJS',
        author: 'Frank',
        tags: [],
        isPublished: true,
        price: 20,
        category: 'web'
    });
    try {
        // course.validate();
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        console.error(ex.message);
    }
}

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({author: 'Frank', isPublished: true})
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({name: 1})
        .select({name: 1, tags: 1});
    console.log(courses);
}

async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            isPublished: false,
            author: 'Frank'
        }
    }, {new: true});
    console.log(course);
}

async function deleteCourse(id) {
    // const result = await Course.deleteOne({_id: id});
    const course = await Course.findByIdAndDelete(id);
    console.log(course);
}

createCourse();