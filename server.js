const express = require('express');
const cors = require('cors');
const request = require('request');
const server = express();


const corsOption = {
  origin: 'www.ironcodeman.com/',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false
};
server.use(cors(corsOption));

server.listen(4000, () => {
  console.log(`server listening on port 4000`);
});

// prevents heroku from setting wbesite to sleep due to inactivity
setInterval(() => {
  request('http://www.ironcodeman.com',(err) => {
    if (err) console.log(err);
    
    console.log('sucessfully reached website');
  });
}, 300000); // every 5 minutes (300000)