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
  authors: [authorSchema]
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

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors
  });

  const result = await course.save();
  console.log(result);
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  const result = await course.save();
  console.log(result);
}

async function removeAuthor(courseId, authorId) {
  let course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course = await course.save();
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

// createCourse('Node Course', [
//   new Author({name: 'Frank'}),
//   new Author({name: 'Henry'}),
//   new Author({name: 'Bean'})
// ]);

// addAuthor('60c19fa245b7d4197d0e1773', new Author({name: 'Oliver'}))

removeAuthor('60c19fa245b7d4197d0e1773', '60c19fa245b7d4197d0e1772')