const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//TODO import React, ReactDOM, components here?

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/wbnotification');
mongoose.Promise = global.Promise;

//use body-parser middleware to look for JSON data in request body
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error:err.message});
})

// TODO add CORS headers

app.listen(process.env.port||4001,function(){
  console.log('now listening for requests');
});
