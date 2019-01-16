const authRoutes = require('./auth-routes');
const profileRoutes = require('./profile-routes');

module.exports = (app) => {
  //set up routes
  app.use('/auth', authRoutes);
  app.use('/profile', profileRoutes);

  // create home route
  app.get('/', (req, res) => {
    res.render('home', {user: req.user});
  });
};
