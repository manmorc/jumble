const passport = require('passport');

const authorization = require('./auth');
const authRoutes = require('./auth/routes');
const response = require('./response');
const error = require('./error');

const users = require('./users');

module.exports = (app) => {

  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    req.locals = {};

    next();
  });

  //set up routes
  app.use('/auth', authRoutes);

  app.get('/test', function (req, res, next) {
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
