require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const mongoString = process.env.DB_URL;

// console.log(mongoString)

mongoose.connect(mongoString);

const database = mongoose.connection;
//on means that it wull connect to the data bse and throws error if connection fails
database.on('error', (error) => {
    console.log(error);
})
//once means it will run only one time  and if successfull displays success message
database.once('connected', () => {
    console.log('Database Connected')
})
// console.log(database)

const app = express();

app.use(express.json());
const routes = require('./routes/routes');

app.use('/api', routes); //base route

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})