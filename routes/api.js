var express = require('express');
var router = express.Router();

var addUser = require('../controllers/addUser');

router.get('/', function(req, res, next) {
  res.send('api here');
});

router.post('/user', addUser);

router.get('/user', function(req, res, next) {
  res.status(200).json({status: 'successful'});
});

module.exports = router;
