const mongoose = require('mongoose');

const options = {
  auth: {
    user: 'admin',
    password: 'admin'
  },
  authSource: 'admin'
}
mongoose.connect('mongodb://localhost/playground', options)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});
const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {
    type: authorSchema,
    required: true
  }
}));

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author
  });

  const result = await course.save();
  console.log(result);
}

// async function updateCourse(courseId) {
//   let course = await Course.findById(courseId);
//   course.author.name = 'Frank Tran';
//   course = await course.save();
//   console.log(course);
// }

async function updateCourse(courseId) {
  let course = await Course.findByIdAndUpdate(courseId, {
    // $set: {
    //   'author.name': 'Tu'
    // }
    $unset: {
      'author': ''
    }
  }, {new: true});
  console.log(course);
}

async function listCourses() {
  const courses = await Course
    .find()
    .populate('author', 'name -_id')
    .populate('category', 'name')
    .select('name author');
  console.log(courses);
}

// createCourse('Node Course', new Author({name: 'Frank'}))

updateCourse('60c19b8df82b7218b6fd7376');