const passport = require('passport');
const knex = require('../db/knex');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt-nodejs');
const cfg = require('./config.js');
const { SECRET_OR_KEY } = require('../assets');

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_OR_KEY
}

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  console.log('payload', payload);
  knex('users').select().where('id', payload.sub)
    .then(user => {
      if(user.length > 0) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
    .catch(err => done(err, false))
})

// Tell passport to use this strategy
passport.use(jwtLogin)
