require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const breakingBadRouter = require('./routes/breaking-bad-quotes.js');
const homeRouter = require('./routes/home.js');
const todoListRouter = require('./routes/todo-list.js');
const mediaRouter = require('./routes/media.js');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', homeRouter)
app.use('/breaking-bad-quotes', breakingBadRouter);
app.use('/todo-list2', todoListRouter)
app.use('/media', mediaRouter)

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => console.log('Connected to db'))
mongoose.connection.on('disconnected', () => console.log('Disconnected from db'))
mongoose.connection.on('error', (e) => console.log('Error with db ' + e))
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
