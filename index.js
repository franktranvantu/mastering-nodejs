const express = require('express');
const Joi = require('joi');

const app = express();

app.use(express.json());

const courses = [
  {id: 1, name: 'Course 1'},
  {id: 2, name: 'Course 2'},
  {id: 3, name: 'Course 3'}
];

app.get('/', (req, res) => {
  res.send('Hello Nodemon');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(course => course.id === id);
  if (!course) {
    res.send('Course not found');
  }
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const course = {
    id: courses.length++,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));