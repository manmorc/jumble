'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

const token = require('./jwt');

function requestCheck(req, res, next) {
  if(req.originalUrl === '/json')return;
  req.locals = {};

  console.log('*****');
  console.log('Starting authorization');
  User.findOne({
    uid: req.query.uid
  }, function(err, user) {
    if(err || !user) {
      req.locals.error = {
        status: 403,
        message: 'User is not authorized'
      };
      return next();
    }
    console.log('User found: ', user._id);
    req.user = user;
    next();
  });
}

function login(req, res, next){
  User.findOne({
    uid: req.query.uid
  }, function(err, user) {
    if(err || !user) {
      req.locals.error = {
        status: 403,
        message: 'User is not authorized'
      };
      return next();
    }
    console.log('User found: ', user._id);
    req.user = user;
  });
}

function logout(req, res, next){
  req.logout();
  res.redirect('/');
}
module.exports = {
  requestCheck,
  login,
  logout
};
