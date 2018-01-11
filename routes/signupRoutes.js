const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const {
    hashed
} = require('../assets')
const auth = require('../config/auth');
const bcrypt = require('bcrypt-nodejs');

router.post('/', (req, res, next) => {
    let {
        first_name,
        last_name,
        email,
        password
    } = req.body;
    try {
        knex('users')
            .select('email', 'password')
            .where('email', email)
            .then(res => {
                res.send({
                    err: 'email already in use!'
                })
            })
    } catch (e) {
        bcrypt.hash(password, hashed, null, (err, hash) => {
            if (err) {
                console.log(err)
            } else {
                knex('users')
                    .insert({
                        first_name,
                        last_name,
                        email,
                        password: hash,
                        user_type: 5
                    })
                    .then(go => {
                        res.redirect('https://publoft.com/login');
                    })
            }
        });
    }
});



module.exports = router;