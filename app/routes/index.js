var employeesRouter = require('../employees/index');
var usersRouter = require('../users/index');
var express = require('express');
var router = express.Router();
var authRouter = require('../authentication/index')
var authorization = require('../authorization/authorization')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'fsffdsafdsafasfadsf' });
  res.send('Welcome to Employee API...');
});

router.use('/auth', authRouter);

router.use('/employees', authorization, employeesRouter);

router.use('/users', authorization, usersRouter);

module.exports = router;
