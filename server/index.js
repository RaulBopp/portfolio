const express = require('express');
const path = require('path');

const app = express();

app.use('/portfolio', express.static('.'));

app.get('/portfolio/*', (req, res) =>
    res.sendFile(path.join(__dirname + `/../${req.params[0]}.html`))
);

app.listen(3000, () => console.log('serving at http://localhost:3000/portfolio/'));
