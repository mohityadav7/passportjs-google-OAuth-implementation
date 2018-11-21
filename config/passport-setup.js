const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
      // options for google strategy
      callbackURL: '/auth/google/redirect',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      console.log('passport callback function fired');
      console.log(profile);

      // check whether the user already exists
      User.findOne({
        'googleId': profile.id
      }).then((currentUser) => {
        // if user already exists
        if (currentUser) {
          console.log('user is: ' + currentUser);
          done(null, currentUser);
        } else {
          // save user to db
          new User({
            username: profile.displayName,
            googleId: profile.id,
            thumbnail: profile._json.image.url
          }).save().then((newUser) => {
            console.log('new user created: ' + newUser);
          });
          done(null, newUser);
        }
      });
    }
  )
);