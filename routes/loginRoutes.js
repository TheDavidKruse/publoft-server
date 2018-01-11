const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const auth = require ('../config/auth');

/* GET home page. */
router.post('/signup', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
