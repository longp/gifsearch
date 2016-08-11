const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      expses = require('express-session'),
      logger = require('morgan'),
      PORT = 1337,
      request = require('request'),
      ejs = require('ejs'),
      GIF = require('./GIF.js'),
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
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


// route
app.get('/', function(req,res) {
  res.render('index.ejs')
})

var util = require('util');
// GIPHY TOP GIF EXAMPLE
app.post('/gif', function(req, res){
  console.log("Requesting data from giphy...")
  console.log(req.body.query.split(' ').join("+") + " req.body.query")
  request.get({
    url: "http://api.giphy.com/v1/gifs/search",
    qs: {
      q:req.body.query.split(' ').join("+"),
      limit: 1,
      api_key: "dc6zaTOxFJmzC"
    }
  }, function(err, data){

      if (err) {
        console.log("Uh oh! Got an error from giphy.")
        res.send("There was an error")
      }
      console.log("the data is : " + data.body)

      res.send(data.body);

  })

})

app.post('/save', function (req, res) {
  
  var newGif = new GIF({

  })
})



app.listen(PORT, function() {
    console.log("Listening on:" + PORT);
});
// View Engine Setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
