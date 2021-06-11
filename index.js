const express = require('express');
const app = express();
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
const logger = require('./middleware/logger')

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Listening on port ${port}...`));