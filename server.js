const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const news = require('./routes/api/news');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({
    etended: false
}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);


// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/news', news);

const port = process.env.PORT || 3500;

app.listen(port, () => console.log(`Server running on port ${port}`));