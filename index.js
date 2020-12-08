const express = require('express');
const app = express();

app.use('/static', express.static('public'));

// function that will allow us to extract the data from the form 
app.use(express.urlencoded({extended: true}));

// embedded javascript. create .ejs files to use as the view template
app.set('view engine', 'ejs');

// GET METHOD
app.get('/', (req, res) => {
    res.render('to-do');
});

// POST METHOD
app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => console.log('Server running on port 3000'));