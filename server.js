const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlenconded({extended: false});

// GET route to display name on the page

app.get('/name/', (request, response) => {
    const name = 'Evan Meshberg';
    response.send(`<h1>${name}</h1>`);
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening on port', port));