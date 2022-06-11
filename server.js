const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const PORT = 8000;

app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: "Ini Rahasia ya",
    resave: false,
    saveUninitialized: false
}));

const router = require('./router');

app.use(router);

app.listen(PORT, () => {
    console.log(`Server sudah running di port ${PORT}`);
});