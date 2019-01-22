const router = require('express').Router();
const passport = require('passport');
const users = require('./index');

router.post('/google',
  passport.authenticate(
  'google',
  { scope: ['profile'] }
  )
);

router.get('/google/redirect', passport.authenticate('google'),
  users.login
);

module.exports = router;
