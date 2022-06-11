const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const PORT = 8000

app.get('/', (req, res) => {
    res.send('masuk');
});
app.listen(PORT, () => {
    console.log(`Server sudah running`);
});