const jwt = require('jsonwebtoken');
const duration = 1000 * 60 * 60 * 24 * 30; // 30 days

function create(user){
  return jwt.sign({
    id: user._id,
  });
}

module.exports = {
  create,
  duration
};
