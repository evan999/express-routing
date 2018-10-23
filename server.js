const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const url = require('url');  
const querystring = require('querystring'); 
//const parseUrlencoded = bodyParser.urlenconded({extended: false});

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



const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening on port', port));