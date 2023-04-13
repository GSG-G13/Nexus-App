require('dotenv').config()
const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const { clientError, serverError } = require('./errors');

const router = require('./routes/router')
const app = express()

app.use(express.static(join(__dirname, '..', 'public')))
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

// make sure to use the errors
// app.use(clientError);
// app.use(serverError);

app.set('port', process.env.PORT || 4000 )

module.exports = app;