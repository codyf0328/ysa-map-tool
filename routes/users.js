var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  res.send('respond with a resource');
  console.log(req.body);
});

module.exports = router;
