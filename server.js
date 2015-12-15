var express = require('express'),
    server = express(),
    PORT = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    morgan = require('morgan');

server.use(express.static('./public'));
server.use(bodyParser.json());
server.use(morgan('dev'));

server.get('/whatscooking', function (req, res) {
    res.json({
      appId : process.env.COOK_APP_ID,
      appKey : process.env.COOK_APP_KEY
    })
});

server.listen(PORT, function () {
  console.log("Let's get cookin on port " + PORT);
});
