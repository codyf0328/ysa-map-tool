const express = require('express');
const router = express.Router();

const fs = require('fs');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'YSA Map Tool - 2018' });
});

router.post('/', (req, res) => {
  var fileData = req.body.data;
    fs.writeFile('public/rename_me.json', fileData , function(err) {
      if (err) {
         res.status(500).jsonp({ error: 'Failed to write file' });
      }
    });
});

module.exports = router;
