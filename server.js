var express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

server.use(express.static('./public'));
server.use(bodyParser.json());
server.use(morgan('dev'));

server.get('/kevinisdumb', function (req, res) {
    res.json({
      appId : process.env.COOK_APP_ID,
      appKey : process.env.COOK_APP_KEY
    })
});

server.listen(3000, function () {
  console.log("Let's get cookin");
});
