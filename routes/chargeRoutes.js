const express = require('express');
const {stripePublishable, stripeSecret} = require('../assets.js')
const router = express.Router();
const knex = require('../db/knex');
const stripe = require('stripe')(stripeSecret)

/* GET home page. */
router.post('/trial', (req, res, next) => {
  console.log('recieving payment at /trial',req.body)
    const amount = 30000;

    stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer => {
      console.log('customer',customer)
      stripe.charges.create({
        amount,
        description: "Publoft Trial",
        currency: "usd",
        customer: customer.id,
      })
    })
    .then(charge => {
      console.log('charge', charge)
      res.redirect('http://publoft.com/info')
    });
  });

  router.post('/trial/lowest', (req, res, next) => {
    console.log('recieving payment at /trial/lowest', req.body)
      let amount = 50;
    
      stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
      })
      .then(customer => {
        console.log('customer',customer)
        stripe.charges.create({
          amount,
          description: "Publoft Trial",
          currency: "usd",
          customer: customer.id,
        })
      })
      .then(charge => {
        console.log('charge', charge)
        res.redirect('http://publoft.com/info')
      });
    });

module.exports = router;
