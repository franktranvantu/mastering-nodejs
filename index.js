const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const logger = require('./middleware/logger');
const home = require('./routes/home');
const courses = require('./routes/courses');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true})); // key=value&key=value => req.body
app.use(express.static('public'));
app.use(helmet());
app.use('/', home);
app.use('/api/courses', courses);
if (app.get('env') === 'development') {
  console.log('Morgan enabled...');
  app.use(morgan('tiny'));
}
app.use(logger);

console.log(`Application name: ${config.get('name')}`);
console.log(`Mail server host: ${config.get('mail.host')}`);
console.log(`Mail server password: ${config.get('mail.password')}`);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
