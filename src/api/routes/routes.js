const passport = require('passport');

const authorization = require('./auth');
const authRoutes = require('./auth/routes');
const response = require('./response');
const error = require('./error');

const users = require('./users');

module.exports = (app) => {
  //all preparations goes here
  // app.all('*', authorization.requestCheck);


  //set up routes
  app.use('/auth', authRoutes);

  app.get('/test', function (req, res, next) {
    req.locals = {};
    console.log('test route');
    req.locals.result = 'test success';
    next();
  });

// POST method route
  app.get('/user/:userId', users.getUser);

  //sending response with data or error
  app.route('*').all(response);
  app.route('*').all(error);
};
