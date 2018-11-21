const router = require('express').Router();

const authCheck = function (req, res, next) {
    if (!req.user) {
        console.log('User not logged in...\nRedirecting to loging page');
        res.redirect('/auth/login');
    } else {
        console.log('user is already logged in')
        next();
    }
}

router.get('/', authCheck, (req, res) => {
    res.render('profile', {
        user: req.user
    });
});

module.exports = router;
module.exports.authCheck = authCheck;