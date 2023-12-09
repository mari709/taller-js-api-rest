const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

module.exports = app;