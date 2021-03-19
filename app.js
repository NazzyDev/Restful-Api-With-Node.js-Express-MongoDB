const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');

//MiddLewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import ROutes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


// ROUTES 
app.get('/', (req, res) => {
    res.send('We are on home');
});

// connect do DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => 
        console.log('connected to db!')
);

// how to we start lsistening to the server 
app.listen(3000);
