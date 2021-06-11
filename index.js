const express = require('express');
const config = require('config');
const app = express();
require('./startup/routes')(app);
require('./startup/db')();

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

process.on('unhandledRejection', ex => {
  throw ex;
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));