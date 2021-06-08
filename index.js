const express = require('express');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const logger = require('./logger');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true})); // key=value&key=value => req.body
app.use(express.static('public'));
app.use(helmet());
if (app.get('env') === 'development') {
  console.log('Morgan enabled...');
  app.use(morgan('tiny'));
}
app.use(logger);

console.log(`Application name: ${config.get('name')}`);
console.log(`Mail server host: ${config.get('mail.host')}`);
console.log(`Mail server password: ${config.get('mail.password')}`);

const courses = [
  {id: 1, name: 'Course 1'},
  {id: 2, name: 'Course 2'},
  {id: 3, name: 'Course 3'}
];

app.get('/', (req, res) => {
  res.render('index', {title: 'Mastering NodeJS', message: 'Hello World'});
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(course => course.id === id);
  if (!course) {
    return res.status(404).send('Course not found');
  }
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  const {error} = validateCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const course = {
    id: courses.length++,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(course => course.id === id);
  if (!course) {
    return res.status(404).send('Course not found');
  }
  const {error} = validateCourse(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(course => course.id === id);
  if (!course) {
    return res.status(404).send('Course not found');
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });
  return schema.validate(course);
}