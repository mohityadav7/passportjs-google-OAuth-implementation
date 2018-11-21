const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../config/passport-setup');

// auth login
router.get('/login', (req, res) => {
  res.render('login', {
    user: req.user
  });
});

router.get('/logout', (req, res) => {
  // handle with Passport
  req.logout();
  res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// google callback route
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send('you are redirected from google!' + req.user);
  res.redirect('/profile/');
});

module.exports = router;