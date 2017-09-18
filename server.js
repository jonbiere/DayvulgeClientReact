const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000

// function to wrap middleware:
const createApp = () => {

  // for server logs to help debugging
  app.use(morgan('dev'));

  // static middleware
  app.use('/', express.static('public'));

  app.use('*', (req, res)=>{res.sendFile(path.join(__dirname,'/public/index.html'))})

  const server = app.listen(PORT, function(){
    console.log('Listening on port '+PORT);
  });
}

createApp();
