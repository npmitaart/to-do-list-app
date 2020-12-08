const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connecting to database
const dotenv = require('dotenv');
dotenv.config();

app.use('/static', express.static('public'));

// function that will allow us to extract the data from the form 
app.use(express.urlencoded({extended: true}));

// connection to database
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true}, () => {
    console.log('Connected to db!');

    app.listen(3000, () => console.log('Server running on port 3000'));
});

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