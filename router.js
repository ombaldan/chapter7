const router = require('express').Router();
const auth = require('./controllers/authController');
const restrict = require('./middlewares/restrict');

router.get('/', restrict, (req, res) => {
    res.render('index')
});

router.get('/register', auth.registerForm);
router.post('/register', auth.register);

router.get('/login', auth.loginForm);
router.post('/login', auth.login);

router.get('/whoami', restrict, auth.whoami);

module.exports = router;