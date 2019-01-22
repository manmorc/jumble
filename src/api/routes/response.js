'use strict';

module.exports = function(req, res, next) {
  if(req.originalUrl !== "/json" && req.originalUrl !== "/json/version")
    console.log(req.originalUrl);

  if(req.locals && req.locals.result && (!req.locals.error)) {
    console.log('Sending response');
    res.status(200);
    res.send(req.locals.result || {});
  }
  else {
    res.status(400).send('Wrong request');
  }
};
