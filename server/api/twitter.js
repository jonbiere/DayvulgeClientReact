const twitter = require('express').Router();
const axios = require('axios');
const accessToken = '';

const twitterBearerToken = process.env.TWITTER_BEARER_TOKEN ?
process.env.TWITTER_BEARER_TOKEN :
require('../../twitterSecret').bearer_token_creds;

twitter.use('/', function(req, res, next){
  axios({
    method: 'post',
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
      Authorization: `Basic ${new Buffer(twitterBearerToken).toString('base64')}`,
      'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data: 'grant_type=client_credentials'
  })
  .then(response => {
    console.log('back from twitter oauth', response.data);
  })
})

// twitter.get('/:place', function(req, res, next){

// })



// twitter.post('/', function(req, res, next){/* etc */})

// twitter.put('/:routeId', function(req, res, next){/* etc */})

// twitter.delete('/:routeId', function(req, res, next){/* etc */})


module.exports = twitter;
