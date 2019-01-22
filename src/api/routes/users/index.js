let mongoose = require('mongoose');
let User = mongoose.model('User');

module.exports.getUser = (req, res, next) => {
  console.log('*****');
  console.log('Starting user search');
  const userId = req.params.userId;


  console.log('User id: ', userId);

  if(!userId){
    req.locals.error = 'No user id';
    return next();
  }

  User.findOne({ _id: userId }, (err, user) => {
    if(err || !user) {
      console.log(err || `No user found with id: ${userId}`);
      return req.locals.error = err || `No user found with id: ${userId}`;
    }
    console.log('User found: ', user._id);
    console.log(user.username);
    req.locals.result = user;
    return next();
  });
};



