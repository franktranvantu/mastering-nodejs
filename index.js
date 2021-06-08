const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Nodemon');
});

app.get('/api/courses', (req, res) => {
  res.send(JSON.stringify([1, 2, 3]));
});

app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

// http://localhost:3000/api/posts/2000/10?sortBy=name
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));