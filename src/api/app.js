const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./config/passport-setup');
require('dotenv').config();

const mongoose = require('mongoose');
const app = express();

// set view engine

require('./routes/routes')(app);

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SESSION_KEY]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(process.env.DB_URI, () => {
    console.log('connected to mongodb');
});

app.listen(process.env.API_PORT, () => {
    console.log(`App now listening for requests on port ${process.env.API_PORT}`);
});
