require('dotenv').config()
const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');

const router = require('./router/router')
const app = express()

app.use(express.static(join(__dirname, '..', 'public')))
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)


app.set('port', process.env.PORT || 3000 )

module.exports = app;