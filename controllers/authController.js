const passport = require("../lib/passport");
const { User } = require("../models");

module.exports = {
    registerForm : (req, res) => {
        res.render('register');
    },
    register: (req, res, next) => {
        User.register(req.body)
            .then(() => {
                res.redirect('/login');
            }).catch(err => next(err));
    },
    loginForm: (req, res) => {
        res.render('login');
    },
    login: passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }),
    whoami: (req, res) => {
        res.render('profile', req.user.dataValues);
    }
}