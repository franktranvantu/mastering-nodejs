const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Nodemon');
});

app.get('/api/courses', (req, res) => {
  res.send(JSON.stringify([1, 2, 3]));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));