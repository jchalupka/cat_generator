var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  const result = fetch('http://theoldreader.com/kittens/600/400/');
  result
    .then(catResponse => catResponse.buffer())
    .then(buf => {
      res.write(buf);
      res.end()
    });
});

module.exports = router;
