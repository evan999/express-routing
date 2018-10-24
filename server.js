const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const url = require('url');  
const querystring = require('querystring'); 


app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

// GET route to display name on the page

app.get('/', (req, res) => {
    const name = 'Evan Meshberg';
    res.send(`<h1>${name}</h1>`);
});

// Dynamic route to get ID by entering in ID number

app.get('/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/add/num', (req, res) => {
    const num1 = parseInt(req.query.num1, 10);
    const num2 = parseInt(req.query.num2, 10);
    res.send(`<h1>${num1 + num2}</h1>`);
});




const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening on port', port));