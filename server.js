const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');  
const querystring = require('querystring'); 

var parseUrlencoded = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

let items = ['pumpkin', 'candy', 'autumn', 'mummy', 'witch', 'ghost'];

// GET route to display name on the page

app.get('/', (req, res) => {
    const name = 'Evan Meshberg';
    res.send(`<h1>${name}</h1>`);
});

app.get('/test/', (req, res) => res.send('<h1>test route</h1>'));

// Dynamic route to get ID by entering in ID number

app.get('/test/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/test/add', (req, res) => {
    const num1 = parseInt(req.query.num1, 10);
    const num2 = parseInt(req.query.num2, 10);
    let word = req.query.word;
    
    if(word !== undefined){
        word = word.split('').join(' ');
        console.log(word);
        res.send(`<h1>You entered a word. Your word spelled out: ${word}</h1>`);
    }
    else{
        res.send(`<h1>${num1 + num2}</h1>`);
    }
});

app.post('/api/users', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    if(username === "evan999" && password === "1234"){
        res.json({status: 'Logged in'});
    }   
    else{
        res.json({status: 'Invalid credentials'});
    }
});

app.post('/api/item', (req, res) => {
    var newItem = req.body.name;
    items.push(newItem);
    res.json(items);
});

app.delete('/api/item', (req, res) => {
    const item = req.params.item;
    const ifItem = items.indexOf(item);
    
    if(ifItem != -1){
        items.splice(ifItem, 1);
        res.json(`You deleted item ${item}`);
    }
    else{
        res.status(406).json(`${item} not found`);
        next();
    }
    
    res.json(items);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening on port', port));