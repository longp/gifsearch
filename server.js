const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      expses = require('express-session'),
      logger = require('morgan'),
      PORT = 1337,
      ejs = require('ejs'),
      path = require('path');
// database connection
const mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost/textgif');

// environmental variables
app.use(express.static(path.join(__dirname, './public')))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expses({
  secret: 'keyboard cat rocks',
  resave: true,
  saveUninitialized: true,
  cookie : { secure : false, maxAge : (7 * 24 * 60 * 60 * 1000) }
}));

// route
app.get('/', function(req,res) {
  res.render('index.ejs')
})


app.listen(PORT, function() {
    console.log("Listening on:" + PORT);
});
// View Engine Setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
